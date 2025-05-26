import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createExpressionSchema,
} from "../core/schema";
import { createMeasureComponentSchema } from "../measurecomponent/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureStratifierSchema() {
  const baseSchema: z.ZodType<types.MeasureStratifier> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    criteria: z.lazy(() => createExpressionSchema()).optional(),
    component: z.array(z.lazy(() => createMeasureComponentSchema())).optional(),
  });

  return baseSchema;
}
