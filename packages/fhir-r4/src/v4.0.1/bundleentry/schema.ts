import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createBundleLinkSchema } from "../bundlelink/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createBundleSearchSchema } from "../bundlesearch/schema";
import { createBundleRequestSchema } from "../bundlerequest/schema";
import { createBundleResponseSchema } from "../bundleresponse/schema";

/* Generated from FHIR JSON Schema */

export function createBundleEntrySchema() {
  return getCachedSchema("BundleEntry", () => {
    const baseSchema: z.ZodType<types.BundleEntry> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      link: z.array(createBundleLinkSchema()).optional(),
      fullUrl: primitives.getUriSchema().optional(),
      _fullUrl: createElementSchema().optional(),
      resource: createResourceListSchema().optional(),
      search: createBundleSearchSchema().optional(),
      request: createBundleRequestSchema().optional(),
      response: createBundleResponseSchema().optional(),
    });

    return baseSchema;
  });
}
