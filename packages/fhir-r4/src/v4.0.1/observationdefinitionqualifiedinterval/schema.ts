import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createRangeSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionQualifiedIntervalSchema() {
  const baseSchema: z.ZodType<types.ObservationDefinitionQualifiedInterval> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      category: z.enum(["reference", "critical", "absolute"]).optional(),
      _category: z.lazy(() => createElementSchema()).optional(),
      range: z.lazy(() => createRangeSchema()).optional(),
      context: z.lazy(() => createCodeableConceptSchema()).optional(),
      appliesTo: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      age: z.lazy(() => createRangeSchema()).optional(),
      gestationalAge: z.lazy(() => createRangeSchema()).optional(),
      condition: primitives.createStringSchema().optional(),
      _condition: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
