import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionUndesirableEffectSchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinitionUndesirableEffect> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      symptomConditionEffect: z
        .lazy(() => createCodeableReferenceSchema())
        .optional(),
      classification: z.lazy(() => createCodeableConceptSchema()).optional(),
      frequencyOfOccurrence: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
    });

  return baseSchema;
}
