import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createMeasurePopulationSchema } from "../measurepopulation/schema";
import { createMeasureStratifierSchema } from "../measurestratifier/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureGroupSchema() {
  return getCachedSchema("MeasureGroup", () => {
    const baseSchema: z.ZodType<types.MeasureGroup> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      population: z.array(createMeasurePopulationSchema()).optional(),
      stratifier: z.array(createMeasureStratifierSchema()).optional(),
    });

    return baseSchema;
  });
}
