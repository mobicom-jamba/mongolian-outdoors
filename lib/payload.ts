import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";
import { cache } from "react";

/**
 * Cached Payload Local API client for use in Server Components / Server Actions.
 * `getPayload` already singletons the instance; React `cache` dedupes per request.
 */
export const getPayloadClient = cache(async () => getPayload({ config }));
