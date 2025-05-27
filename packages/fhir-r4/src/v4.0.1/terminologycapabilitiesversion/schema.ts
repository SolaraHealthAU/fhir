import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createTerminologyCapabilitiesFilterSchema } from "../terminologycapabilitiesfilter/schema";

/* Generated from FHIR JSON Schema */

export function createTerminologyCapabilitiesVersionSchema() {
  const baseSchema: z.ZodType<types.TerminologyCapabilitiesVersion> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createStringSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    isDefault: primitives.createBooleanSchema().optional(),
    _isDefault: z.lazy(() => createElementSchema()).optional(),
    compositional: primitives.createBooleanSchema().optional(),
    _compositional: z.lazy(() => createElementSchema()).optional(),
    language: z.array(primitives.createCodeSchema()).optional(),
    _language: z.array(z.lazy(() => createElementSchema())).optional(),
    filter: z
      .array(z.lazy(() => createTerminologyCapabilitiesFilterSchema()))
      .optional(),
    property: z.array(primitives.createCodeSchema()).optional(),
    _property: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
