import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionQuantitativeDetailsSchema() {
  return getCachedSchema("ObservationDefinitionQuantitativeDetails", () => {
    const baseSchema: z.ZodType<types.ObservationDefinitionQuantitativeDetails> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        customaryUnit: createCodeableConceptSchema().optional(),
        unit: createCodeableConceptSchema().optional(),
        conversionFactor: primitives.getDecimalSchema().optional(),
        _conversionFactor: createElementSchema().optional(),
        decimalPrecision: primitives.getIntegerSchema().optional(),
        _decimalPrecision: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
