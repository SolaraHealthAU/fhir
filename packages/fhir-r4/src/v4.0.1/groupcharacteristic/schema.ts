import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
  createRangeSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGroupCharacteristicSchema() {
  return getCachedSchema("GroupCharacteristic", () => {
    const baseSchema: z.ZodType<types.GroupCharacteristic> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: createCodeableConceptSchema(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueBoolean: z.boolean().optional(),
      _valueBoolean: z.lazy(() => createElementSchema()).optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueRange: createRangeSchema().optional(),
      valueReference: createReferenceSchema().optional(),
      exclude: primitives.getBooleanSchema(),
      _exclude: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
