import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Tours } from "./collections/Tours";
import { Destinations } from "./collections/Destinations";
import { News } from "./collections/News";
import { Team } from "./collections/Team";
import { Faqs } from "./collections/Faqs";
import { Bookings } from "./collections/Bookings";
import { Inquiries } from "./collections/Inquiries";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      title: "Mongolian Outdoors",
      titleSuffix: "— Mongolian Outdoors",
      description: "Content management for Mongolian Outdoors tours.",
      icons: [{ rel: "icon", type: "image/x-icon", url: "/favicon.ico" }],
    },
    components: {
      graphics: {
        Logo: "/components/admin/Logo#Logo",
        Icon: "/components/admin/Icon#Icon",
      },
    },
  },
  collections: [
    Tours,
    Destinations,
    News,
    Team,
    Faqs,
    Media,
    Bookings,
    Inquiries,
    Users,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    schemaName: "payload",
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      // Supabase session pooler caps total clients at 15. Keep this low so that
      // parallel build workers + runtime stay under the limit.
      max: 3,
    },
  }),
  sharp,
});
