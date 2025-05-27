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

/* Generated from FHIR JSON Schema */

export function createMeasurePopulationSchema() {
  const baseSchema: z.ZodType<types.MeasurePopulation> = z.object({
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
    inputPopulationId: primitives.createStringSchema().optional(),
    _inputPopulationId: z.lazy(() => createElementSchema()).optional(),
    aggregateMethod: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
