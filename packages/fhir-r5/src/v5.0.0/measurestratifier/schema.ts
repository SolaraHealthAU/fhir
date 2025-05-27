import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createExpressionSchema,
  createReferenceSchema,
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
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    criteria: z.lazy(() => createExpressionSchema()).optional(),
    groupDefinition: z.lazy(() => createReferenceSchema()).optional(),
    component: z.array(z.lazy(() => createMeasureComponentSchema())).optional(),
  });

  return baseSchema;
}
