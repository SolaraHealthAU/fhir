import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductProcessingSchema() {
  return getCachedSchema("BiologicallyDerivedProductProcessing", () => {
    const baseSchema: z.ZodType<types.BiologicallyDerivedProductProcessing> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        procedure: createCodeableConceptSchema().optional(),
        additive: createReferenceSchema().optional(),
        timeDateTime: z.string().optional(),
        _timeDateTime: z.lazy(() => createElementSchema()).optional(),
        timePeriod: createPeriodSchema().optional(),
      });

    return baseSchema;
  });
}
