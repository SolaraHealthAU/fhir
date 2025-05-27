import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductManipulationSchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProductManipulation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      timeDateTime: z.string().optional(),
      _timeDateTime: z.lazy(() => createElementSchema()).optional(),
      timePeriod: z.lazy(() => createPeriodSchema()).optional(),
    });

  return baseSchema;
}
