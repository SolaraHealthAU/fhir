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
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicinalProductIndicationOtherTherapySchema } from "../medicinalproductindicationothertherapy/schema";
import { createPopulationSchema } from "../population/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductIndicationSchema() {
  return getCachedSchema("MedicinalProductIndication", () => {
    const baseSchema: z.ZodType<types.MedicinalProductIndication> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductIndication"),
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
        diseaseSymptomProcedure: createCodeableConceptSchema().optional(),
        diseaseStatus: createCodeableConceptSchema().optional(),
        comorbidity: z.array(createCodeableConceptSchema()).optional(),
        intendedEffect: createCodeableConceptSchema().optional(),
        duration: createQuantitySchema().optional(),
        otherTherapy: z
          .array(createMedicinalProductIndicationOtherTherapySchema())
          .optional(),
        undesirableEffect: z.array(createReferenceSchema()).optional(),
        population: z.array(createPopulationSchema()).optional(),
      });

    return baseSchema;
  });
}
