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
import { createMedicinalProductContraindicationOtherTherapySchema } from "../medicinalproductcontraindicationothertherapy/schema";
import { createPopulationSchema } from "../population/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductContraindicationSchema() {
  return getCachedSchema("MedicinalProductContraindication", () => {
    const baseSchema: z.ZodType<types.MedicinalProductContraindication> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductContraindication"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: z.lazy(() => createElementSchema()).optional(),
        language: primitives.getCodeSchema().optional(),
        _language: z.lazy(() => createElementSchema()).optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(createResourceListSchema()).optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        subject: z.array(createReferenceSchema()).optional(),
        disease: createCodeableConceptSchema().optional(),
        diseaseStatus: createCodeableConceptSchema().optional(),
        comorbidity: z.array(createCodeableConceptSchema()).optional(),
        therapeuticIndication: z.array(createReferenceSchema()).optional(),
        otherTherapy: z
          .array(createMedicinalProductContraindicationOtherTherapySchema())
          .optional(),
        population: z.array(createPopulationSchema()).optional(),
      });

    return baseSchema;
  });
}
