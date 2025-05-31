import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleRequestSchema() {
  return getCachedSchema("BundleRequest", () => {
    const baseSchema: z.ZodType<types.BundleRequest> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      method: z
        .enum(["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"])
        .optional(),
      _method: createElementSchema().optional(),
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      ifNoneMatch: primitives.getStringSchema().optional(),
      _ifNoneMatch: createElementSchema().optional(),
      ifModifiedSince: primitives.getInstantSchema().optional(),
      _ifModifiedSince: createElementSchema().optional(),
      ifMatch: primitives.getStringSchema().optional(),
      _ifMatch: createElementSchema().optional(),
      ifNoneExist: primitives.getStringSchema().optional(),
      _ifNoneExist: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
