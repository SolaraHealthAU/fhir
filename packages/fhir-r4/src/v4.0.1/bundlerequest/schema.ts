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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      method: z
        .enum(["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"])
        .optional(),
      _method: z.lazy(() => createElementSchema()).optional(),
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      ifNoneMatch: primitives.getStringSchema().optional(),
      _ifNoneMatch: z.lazy(() => createElementSchema()).optional(),
      ifModifiedSince: primitives.getInstantSchema().optional(),
      _ifModifiedSince: z.lazy(() => createElementSchema()).optional(),
      ifMatch: primitives.getStringSchema().optional(),
      _ifMatch: z.lazy(() => createElementSchema()).optional(),
      ifNoneExist: primitives.getStringSchema().optional(),
      _ifNoneExist: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
