import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MedicinalProductIndication> = z.object({
    resourceType: z.literal("MedicinalProductIndication"),
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
    diseaseSymptomProcedure: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    diseaseStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    comorbidity: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    intendedEffect: z.lazy(() => createCodeableConceptSchema()).optional(),
    duration: z.lazy(() => createQuantitySchema()).optional(),
    otherTherapy: z
      .array(z.lazy(() => createMedicinalProductIndicationOtherTherapySchema()))
      .optional(),
    undesirableEffect: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    population: z.array(z.lazy(() => createPopulationSchema())).optional(),
  });

  return baseSchema;
}
