import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";
import { createMeasureComponentSchema } from "../measurecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureStratifierSchema() {
  return getCachedSchema("MeasureStratifier", () => {
    const baseSchema: z.ZodType<types.MeasureStratifier> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      criteria: createExpressionSchema().optional(),
      component: z.array(createMeasureComponentSchema()).optional(),
    });

    return baseSchema;
  });
}
