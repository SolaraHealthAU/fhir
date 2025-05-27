import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createEvidenceSampleSizeSchema } from "../evidencesamplesize/schema";
import { createEvidenceAttributeEstimateSchema } from "../evidenceattributeestimate/schema";
import { createEvidenceModelCharacteristicSchema } from "../evidencemodelcharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceStatisticSchema() {
  const baseSchema: z.ZodType<types.EvidenceStatistic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    statisticType: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    numberOfEvents: primitives.createUnsignedIntSchema().optional(),
    _numberOfEvents: z.lazy(() => createElementSchema()).optional(),
    numberAffected: primitives.createUnsignedIntSchema().optional(),
    _numberAffected: z.lazy(() => createElementSchema()).optional(),
    sampleSize: z.lazy(() => createEvidenceSampleSizeSchema()).optional(),
    attributeEstimate: z
      .array(z.lazy(() => createEvidenceAttributeEstimateSchema()))
      .optional(),
    modelCharacteristic: z
      .array(z.lazy(() => createEvidenceModelCharacteristicSchema()))
      .optional(),
  });

  return baseSchema;
}
