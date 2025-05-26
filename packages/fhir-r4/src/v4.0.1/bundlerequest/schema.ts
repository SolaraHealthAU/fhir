import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleRequestSchema() {
  const baseSchema: z.ZodType<types.BundleRequest> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    method: z
      .enum(["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"])
      .optional(),
    _method: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    ifNoneMatch: primitives.createStringSchema().optional(),
    _ifNoneMatch: z.lazy(() => createElementSchema()).optional(),
    ifModifiedSince: primitives.createInstantSchema().optional(),
    _ifModifiedSince: z.lazy(() => createElementSchema()).optional(),
    ifMatch: primitives.createStringSchema().optional(),
    _ifMatch: z.lazy(() => createElementSchema()).optional(),
    ifNoneExist: primitives.createStringSchema().optional(),
    _ifNoneExist: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
