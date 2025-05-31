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

/* Generated from FHIR JSON Schema */

export function createMeasurePopulationSchema() {
  return getCachedSchema("MeasurePopulation", () => {
    const baseSchema: z.ZodType<types.MeasurePopulation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      criteria: createExpressionSchema(),
    });

    return baseSchema;
  });
}
