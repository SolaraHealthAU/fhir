import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceReportCharacteristicSchema() {
  const baseSchema: z.ZodType<types.EvidenceReportCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    exclude: primitives.createBooleanSchema().optional(),
    _exclude: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
