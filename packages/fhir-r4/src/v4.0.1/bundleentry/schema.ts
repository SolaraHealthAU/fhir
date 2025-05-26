import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createBundleLinkSchema } from "../bundlelink/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createBundleSearchSchema } from "../bundlesearch/schema";
import { createBundleRequestSchema } from "../bundlerequest/schema";
import { createBundleResponseSchema } from "../bundleresponse/schema";

/* Generated from FHIR JSON Schema */

export function createBundleEntrySchema() {
  const baseSchema: z.ZodType<types.BundleEntry> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    link: z.array(z.lazy(() => createBundleLinkSchema())).optional(),
    fullUrl: primitives.createUriSchema().optional(),
    _fullUrl: z.lazy(() => createElementSchema()).optional(),
    resource: z.lazy(() => createResourceListSchema()).optional(),
    search: z.lazy(() => createBundleSearchSchema()).optional(),
    request: z.lazy(() => createBundleRequestSchema()).optional(),
    response: z.lazy(() => createBundleResponseSchema()).optional(),
  });

  return baseSchema;
}
