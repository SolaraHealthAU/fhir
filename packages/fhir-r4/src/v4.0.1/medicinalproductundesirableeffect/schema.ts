import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MedicinalProductUndesirableEffect> =
    z.object({
      resourceType: z.literal("MedicinalProductUndesirableEffect"),
      id: primitives.createIdSchema().optional(),
      meta: z.lazy(() => createMetaSchema()).optional(),
      implicitRules: primitives.createUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.createCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: z.lazy(() => createNarrativeSchema()).optional(),
      contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
      symptomConditionEffect: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      classification: z.lazy(() => createCodeableConceptSchema()).optional(),
      frequencyOfOccurrence: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      population: z.array(z.lazy(() => createPopulationSchema())).optional(),
    });

  return baseSchema;
}
