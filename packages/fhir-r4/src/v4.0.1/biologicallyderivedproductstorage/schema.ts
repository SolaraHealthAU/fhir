import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductStorageSchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProductStorage> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      temperature: primitives.createDecimalSchema().optional(),
      _temperature: z.lazy(() => createElementSchema()).optional(),
      scale: z.enum(["farenheit", "celsius", "kelvin"]).optional(),
      _scale: z.lazy(() => createElementSchema()).optional(),
      duration: z.lazy(() => createPeriodSchema()).optional(),
    });

  return baseSchema;
}
