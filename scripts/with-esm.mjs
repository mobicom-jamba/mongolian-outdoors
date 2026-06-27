// Generic runner for Payload .mts scripts. The `payload` CLI and a plain
// `tsx` invocation both fail here (tsx transpiles .ts to CJS, then require()s
// ESM packages that use top-level await). We temporarily flip the project to
// `"type": "module"` so tsx loads .ts as ESM, run the target, then restore.
//
// Usage: node scripts/with-esm.mjs scripts/<file>.mts [args...]
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/with-esm.mjs <script.mts> [args...]");
  process.exit(1);
}

const PKG = "package.json";
const original = readFileSync(PKG, "utf8");

try {
  const pkg = JSON.parse(original);
  pkg.type = "module";
  writeFileSync(PKG, JSON.stringify(pkg, null, 2) + "\n");

  const res = spawnSync(
    process.execPath,
    ["--env-file-if-exists=.env", "--import", "tsx/esm", target, ...process.argv.slice(3)],
    { stdio: "inherit" },
  );
  process.exitCode = res.status ?? 1;
} finally {
  writeFileSync(PKG, original);
}
