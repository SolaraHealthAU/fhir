import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductManipulationSchema() {
  return getCachedSchema("BiologicallyDerivedProductManipulation", () => {
    const baseSchema: z.ZodType<types.BiologicallyDerivedProductManipulation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        timeDateTime: z.string().optional(),
        _timeDateTime: createElementSchema().optional(),
        timePeriod: createPeriodSchema().optional(),
      });

    return baseSchema;
  });
}
