import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRatioSchema,
  createRangeSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createServiceRequestParameterSchema() {
  const baseSchema: z.ZodType<types.ServiceRequestParameter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRatio: z.lazy(() => createRatioSchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
