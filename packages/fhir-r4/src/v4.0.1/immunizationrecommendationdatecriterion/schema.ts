import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationRecommendationDateCriterionSchema() {
  const baseSchema: z.ZodType<types.ImmunizationRecommendationDateCriterion> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      value: primitives.createDateTimeSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
