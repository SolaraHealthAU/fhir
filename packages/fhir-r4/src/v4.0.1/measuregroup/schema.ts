import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createMeasurePopulationSchema } from "../measurepopulation/schema";
import { createMeasureStratifierSchema } from "../measurestratifier/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureGroupSchema() {
  const baseSchema: z.ZodType<types.MeasureGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    population: z
      .array(z.lazy(() => createMeasurePopulationSchema()))
      .optional(),
    stratifier: z
      .array(z.lazy(() => createMeasureStratifierSchema()))
      .optional(),
  });

  return baseSchema;
}
