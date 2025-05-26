import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createRangeSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPopulationSchema() {
  const baseSchema: z.ZodType<types.Population> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    ageRange: z.lazy(() => createRangeSchema()).optional(),
    ageCodeableConcept: z.lazy(() => createCodeableConceptSchema()).optional(),
    gender: z.lazy(() => createCodeableConceptSchema()).optional(),
    race: z.lazy(() => createCodeableConceptSchema()).optional(),
    physiologicalCondition: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
  });

  return baseSchema;
}
