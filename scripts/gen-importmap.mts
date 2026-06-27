// Regenerates app/(payload)/admin/importMap.js. Works around the broken
// `payload generate:importmap` CLI. Run: yarn generate:importmap
import configPromise from "@payload-config";
import { generateImportMap } from "../node_modules/payload/dist/bin/generateImportMap/index.js";

const config = await configPromise;
await generateImportMap(config, { log: true, force: true });
console.log("importMap generated");
