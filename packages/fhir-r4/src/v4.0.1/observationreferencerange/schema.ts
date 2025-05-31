import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
  createRangeSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationReferenceRangeSchema() {
  return getCachedSchema("ObservationReferenceRange", () => {
    const baseSchema: z.ZodType<types.ObservationReferenceRange> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        low: createQuantitySchema().optional(),
        high: createQuantitySchema().optional(),
        type: createCodeableConceptSchema().optional(),
        appliesTo: z.array(createCodeableConceptSchema()).optional(),
        age: createRangeSchema().optional(),
        text: primitives.getStringSchema().optional(),
        _text: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
