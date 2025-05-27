import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
  createRangeSchema,
  createRatioSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventDetailSchema() {
  const baseSchema: z.ZodType<types.AuditEventDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueRatio: z.lazy(() => createRatioSchema()).optional(),
    valueTime: z.string().optional(),
    _valueTime: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
    valueBase64Binary: z.string().optional(),
    _valueBase64Binary: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
