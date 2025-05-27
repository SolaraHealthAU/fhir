import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createBundleResponseSchema() {
  return getCachedSchema("BundleResponse", () => {
    const baseSchema: z.ZodType<types.BundleResponse> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      status: primitives.getStringSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      location: primitives.getUriSchema().optional(),
      _location: z.lazy(() => createElementSchema()).optional(),
      etag: primitives.getStringSchema().optional(),
      _etag: z.lazy(() => createElementSchema()).optional(),
      lastModified: primitives.getInstantSchema().optional(),
      _lastModified: z.lazy(() => createElementSchema()).optional(),
      outcome: createResourceListSchema().optional(),
    });

    return baseSchema;
  });
}
