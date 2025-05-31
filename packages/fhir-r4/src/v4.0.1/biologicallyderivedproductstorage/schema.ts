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

export function createBiologicallyDerivedProductStorageSchema() {
  return getCachedSchema("BiologicallyDerivedProductStorage", () => {
    const baseSchema: z.ZodType<types.BiologicallyDerivedProductStorage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        temperature: primitives.getDecimalSchema().optional(),
        _temperature: createElementSchema().optional(),
        scale: z.enum(["farenheit", "celsius", "kelvin"]).optional(),
        _scale: createElementSchema().optional(),
        duration: createPeriodSchema().optional(),
      });

    return baseSchema;
  });
}
