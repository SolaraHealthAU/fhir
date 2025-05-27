import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createImmunizationRecommendationDateCriterionSchema } from "../immunizationrecommendationdatecriterion/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationRecommendationRecommendationSchema() {
  return getCachedSchema("ImmunizationRecommendationRecommendation", () => {
    const baseSchema: z.ZodType<types.ImmunizationRecommendationRecommendation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        vaccineCode: z.array(createCodeableConceptSchema()).optional(),
        targetDisease: createCodeableConceptSchema().optional(),
        contraindicatedVaccineCode: z
          .array(createCodeableConceptSchema())
          .optional(),
        forecastStatus: createCodeableConceptSchema(),
        forecastReason: z.array(createCodeableConceptSchema()).optional(),
        dateCriterion: z
          .array(createImmunizationRecommendationDateCriterionSchema())
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        series: primitives.getStringSchema().optional(),
        _series: z.lazy(() => createElementSchema()).optional(),
        doseNumberPositiveInt: z.number().optional(),
        _doseNumberPositiveInt: z.lazy(() => createElementSchema()).optional(),
        doseNumberString: z.string().optional(),
        _doseNumberString: z.lazy(() => createElementSchema()).optional(),
        seriesDosesPositiveInt: z.number().optional(),
        _seriesDosesPositiveInt: z.lazy(() => createElementSchema()).optional(),
        seriesDosesString: z.string().optional(),
        _seriesDosesString: z.lazy(() => createElementSchema()).optional(),
        supportingImmunization: z.array(createReferenceSchema()).optional(),
        supportingPatientInformation: z
          .array(createReferenceSchema())
          .optional(),
      });

    return baseSchema;
  });
}
