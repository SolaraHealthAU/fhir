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
      targetDisease: z.lazy(() => createCodeableConceptSchema()).optional(),
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
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      series: primitives.createStringSchema().optional(),
      _series: z.lazy(() => createElementSchema()).optional(),
      doseNumberPositiveInt: z.number().optional(),
      _doseNumberPositiveInt: z.lazy(() => createElementSchema()).optional(),
      doseNumberString: z.string().optional(),
      _doseNumberString: z.lazy(() => createElementSchema()).optional(),
      seriesDosesPositiveInt: z.number().optional(),
      _seriesDosesPositiveInt: z.lazy(() => createElementSchema()).optional(),
      seriesDosesString: z.string().optional(),
      _seriesDosesString: z.lazy(() => createElementSchema()).optional(),
      supportingImmunization: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
      supportingPatientInformation: z
        .array(z.lazy(() => createReferenceSchema()))
        .optional(),
    });

  return baseSchema;
}
