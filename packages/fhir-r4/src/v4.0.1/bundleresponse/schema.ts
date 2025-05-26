import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createBundleResponseSchema() {
  const baseSchema: z.ZodType<types.BundleResponse> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    status: primitives.createStringSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    location: primitives.createUriSchema().optional(),
    _location: z.lazy(() => createElementSchema()).optional(),
    etag: primitives.createStringSchema().optional(),
    _etag: z.lazy(() => createElementSchema()).optional(),
    lastModified: primitives.createInstantSchema().optional(),
    _lastModified: z.lazy(() => createElementSchema()).optional(),
    outcome: z.lazy(() => createResourceListSchema()).optional(),
  });

  return baseSchema;
}
