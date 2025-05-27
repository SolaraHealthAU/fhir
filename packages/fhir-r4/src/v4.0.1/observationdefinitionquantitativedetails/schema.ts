import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionQuantitativeDetailsSchema() {
  const baseSchema: z.ZodType<types.ObservationDefinitionQuantitativeDetails> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      customaryUnit: z.lazy(() => createCodeableConceptSchema()).optional(),
      unit: z.lazy(() => createCodeableConceptSchema()).optional(),
      conversionFactor: primitives.createDecimalSchema().optional(),
      _conversionFactor: z.lazy(() => createElementSchema()).optional(),
      decimalPrecision: primitives.createIntegerSchema().optional(),
      _decimalPrecision: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
