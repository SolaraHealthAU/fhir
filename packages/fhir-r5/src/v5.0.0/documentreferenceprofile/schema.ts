import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceProfileSchema() {
  const baseSchema: z.ZodType<types.DocumentReferenceProfile> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    valueCoding: z.lazy(() => createCodingSchema()).optional(),
    valueUri: z.string().optional(),
    _valueUri: z.lazy(() => createElementSchema()).optional(),
    valueCanonical: z.string().optional(),
    _valueCanonical: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
