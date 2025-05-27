import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportComponentSchema() {
  const baseSchema: z.ZodType<types.MeasureReportComponent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
