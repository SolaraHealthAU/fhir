import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createImmunizationRecommendationDateCriterionSchema } from "../immunizationrecommendationdatecriterion/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationRecommendationRecommendationSchema() {
  const baseSchema: z.ZodType<types.ImmunizationRecommendationRecommendation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      vaccineCode: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      targetDisease: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      contraindicatedVaccineCode: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      forecastStatus: z.lazy(() => createCodeableConceptSchema()),
      forecastReason: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      dateCriterion: z
        .array(
          z.lazy(() => createImmunizationRecommendationDateCriterionSchema()),
        )
        .optional(),
      description: primitives.createMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      series: primitives.createStringSchema().optional(),
      _series: z.lazy(() => createElementSchema()).optional(),
      doseNumber: primitives.createStringSchema().optional(),
      _doseNumber: z.lazy(() => createElementSchema()).optional(),
      seriesDoses: primitives.createStringSchema().optional(),
      _seriesDoses: z.lazy(() => createElementSchema()).optional(),
      supportingImmunization: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
      supportingPatientInformation: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
    });

  return baseSchema;
}
