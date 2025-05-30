import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRangeSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSupplyRequestParameterSchema() {
  const baseSchema: z.ZodType<types.SupplyRequestParameter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
