import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionQualifiedValueSchema() {
  const baseSchema: z.ZodType<types.ObservationDefinitionQualifiedValue> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      context: z.lazy(() => createCodeableConceptSchema()).optional(),
      appliesTo: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      gender: primitives.createCodeSchema().optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      age: z.lazy(() => createRangeSchema()).optional(),
      gestationalAge: z.lazy(() => createRangeSchema()).optional(),
      condition: primitives.createStringSchema().optional(),
      _condition: z.lazy(() => createElementSchema()).optional(),
      rangeCategory: primitives.createCodeSchema().optional(),
      _rangeCategory: z.lazy(() => createElementSchema()).optional(),
      range: z.lazy(() => createRangeSchema()).optional(),
      validCodedValueSet: primitives.createCanonicalSchema().optional(),
      normalCodedValueSet: primitives.createCanonicalSchema().optional(),
      abnormalCodedValueSet: primitives.createCanonicalSchema().optional(),
      criticalCodedValueSet: primitives.createCanonicalSchema().optional(),
    });

  return baseSchema;
}
