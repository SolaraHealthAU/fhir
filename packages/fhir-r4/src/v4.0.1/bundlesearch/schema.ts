import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleSearchSchema() {
  const baseSchema: z.ZodType<types.BundleSearch> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    mode: z.enum(["match", "include", "outcome"]).optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    score: primitives.createDecimalSchema().optional(),
    _score: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
