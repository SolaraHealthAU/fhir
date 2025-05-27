import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBundleSearchSchema() {
  return getCachedSchema("BundleSearch", () => {
    const baseSchema: z.ZodType<types.BundleSearch> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      mode: z.enum(["match", "include", "outcome"]).optional(),
      _mode: z.lazy(() => createElementSchema()).optional(),
      score: primitives.getDecimalSchema().optional(),
      _score: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
