// Frees stale Supabase session-pooler (Supavisor) connections.
//
// The session pooler (port 5432) keeps one dedicated Postgres backend per
// client connection and caps the total at pool_size (15). On hard restarts /
// crashes those backends linger as `idle` and are NOT reaped quickly, so across
// many dev restarts they pile up until you hit:
//   (EMAXCONNSESSION) max clients reached in session mode
//
// Running this before `next dev` (see the `predev` npm script) guarantees a
// clean slate. It only terminates connections that are already `idle` for a
// while, so it never interrupts in-flight queries (e.g. a live deploy).
//
// Run manually: yarn db:clean
import pg from "pg";

const { Client } = pg;

const uri = process.env.DATABASE_URI;
if (!uri) {
  console.warn("[db:clean] DATABASE_URI not set — skipping.");
  process.exit(0);
}

// Only the session pooler is affected by EMAXCONNSESSION; skip otherwise.
if (!uri.includes("pooler.supabase.com")) {
  console.log("[db:clean] Not a Supabase pooler URI — skipping.");
  process.exit(0);
}

const client = new Client({ connectionString: uri, connectionTimeoutMillis: 8000 });

try {
  await client.connect();
  const { rows } = await client.query(
    `select count(pg_terminate_backend(pid))::int as terminated
       from pg_stat_activity
      where usename = 'postgres'
        and application_name = 'Supavisor'
        and state = 'idle'
        and state_change < now() - interval '20 seconds'
        and pid <> pg_backend_pid()`,
  );
  console.log(`[db:clean] Freed ${rows[0]?.terminated ?? 0} stale pooler session(s).`);
} catch (err) {
  // Never block dev start on cleanup failure (offline, pool already full, etc).
  console.warn(`[db:clean] Skipped (${err instanceof Error ? err.message : String(err)}).`);
} finally {
  await client.end().catch(() => {});
}
