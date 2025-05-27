import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createTimingSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNutritionOrderSchedule1Schema() {
  const baseSchema: z.ZodType<types.NutritionOrderSchedule1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    timing: z.array(z.lazy(() => createTimingSchema())).optional(),
    asNeeded: primitives.createBooleanSchema().optional(),
    _asNeeded: z.lazy(() => createElementSchema()).optional(),
    asNeededFor: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
