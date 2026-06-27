// One-off type generator that works around the broken `payload generate:types`
// CLI (tsx CJS + top-level await). Run with: node --import tsx/esm scripts/gen-types.mts
import configPromise from "@payload-config";
import { generateTypes } from "../node_modules/payload/dist/bin/generateTypes.js";

const config = await configPromise;
await generateTypes(config, { log: true });
console.log("payload-types.ts generated");
