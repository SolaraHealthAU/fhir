import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPopulationSchema } from "../population/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductUndesirableEffectSchema() {
  return getCachedSchema("MedicinalProductUndesirableEffect", () => {
    const baseSchema: z.ZodType<types.MedicinalProductUndesirableEffect> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductUndesirableEffect"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        subject: z.array(createReferenceSchema()).optional(),
        symptomConditionEffect: createCodeableConceptSchema().optional(),
        classification: createCodeableConceptSchema().optional(),
        frequencyOfOccurrence: createCodeableConceptSchema().optional(),
        population: z.array(createPopulationSchema()).optional(),
      });

    return baseSchema;
  });
}
