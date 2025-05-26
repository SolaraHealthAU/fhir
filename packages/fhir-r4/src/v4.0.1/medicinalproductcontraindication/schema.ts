import { z } from "zod";
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
import { createMedicinalProductContraindicationOtherTherapySchema } from "../medicinalproductcontraindicationothertherapy/schema";
import { createPopulationSchema } from "../population/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductContraindicationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductContraindication> =
    z.object({
      resourceType: z.literal("MedicinalProductContraindication"),
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
      disease: z.lazy(() => createCodeableConceptSchema()).optional(),
      diseaseStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
      comorbidity: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      therapeuticIndication: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
      otherTherapy: z
        .array(
          z.lazy(() =>
            createMedicinalProductContraindicationOtherTherapySchema(),
          ),
        )
        .optional(),
      population: z.array(z.lazy(() => createPopulationSchema())).optional(),
    });

  return baseSchema;
}
