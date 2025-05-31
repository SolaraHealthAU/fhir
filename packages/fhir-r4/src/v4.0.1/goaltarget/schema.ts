import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createElementSchema,
  createRatioSchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGoalTargetSchema() {
  return getCachedSchema("GoalTarget", () => {
    const baseSchema: z.ZodType<types.GoalTarget> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      measure: createCodeableConceptSchema().optional(),
      detailQuantity: createQuantitySchema().optional(),
      detailRange: createRangeSchema().optional(),
      detailCodeableConcept: createCodeableConceptSchema().optional(),
      detailString: z.string().optional(),
      _detailString: createElementSchema().optional(),
      detailBoolean: z.boolean().optional(),
      _detailBoolean: createElementSchema().optional(),
      detailInteger: z.number().optional(),
      _detailInteger: createElementSchema().optional(),
      detailRatio: createRatioSchema().optional(),
      dueDate: z.string().optional(),
      _dueDate: createElementSchema().optional(),
      dueDuration: createDurationSchema().optional(),
    });

    return baseSchema;
  });
}
