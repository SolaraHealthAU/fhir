import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemDesignationSchema() {
  const baseSchema: z.ZodType<types.CodeSystemDesignation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    use: z.lazy(() => createCodingSchema()).optional(),
    additionalUse: z.array(z.lazy(() => createCodingSchema())).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
