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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      status: primitives.getStringSchema().optional(),
      _status: createElementSchema().optional(),
      location: primitives.getUriSchema().optional(),
      _location: createElementSchema().optional(),
      etag: primitives.getStringSchema().optional(),
      _etag: createElementSchema().optional(),
      lastModified: primitives.getInstantSchema().optional(),
      _lastModified: createElementSchema().optional(),
      outcome: createResourceListSchema().optional(),
    });

    return baseSchema;
  });
}
