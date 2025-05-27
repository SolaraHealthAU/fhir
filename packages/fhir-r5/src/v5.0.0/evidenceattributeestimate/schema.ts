import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceAttributeEstimateSchema() {
  const baseSchema: z.ZodType<types.EvidenceAttributeEstimate> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    level: primitives.createDecimalSchema().optional(),
    _level: z.lazy(() => createElementSchema()).optional(),
    range: z.lazy(() => createRangeSchema()).optional(),
    attributeEstimate: z
      .array(z.lazy(() => createEvidenceAttributeEstimateSchema()))
      .optional(),
  });

  return baseSchema;
}
