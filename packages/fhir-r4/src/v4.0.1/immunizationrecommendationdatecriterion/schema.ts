import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationRecommendationDateCriterionSchema() {
  return getCachedSchema("ImmunizationRecommendationDateCriterion", () => {
    const baseSchema: z.ZodType<types.ImmunizationRecommendationDateCriterion> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: createCodeableConceptSchema(),
        value: primitives.getDateTimeSchema().optional(),
        _value: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
