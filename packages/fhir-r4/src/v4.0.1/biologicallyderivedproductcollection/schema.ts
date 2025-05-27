import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductCollectionSchema() {
  return getCachedSchema("BiologicallyDerivedProductCollection", () => {
    const baseSchema: z.ZodType<types.BiologicallyDerivedProductCollection> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        collector: createReferenceSchema().optional(),
        source: createReferenceSchema().optional(),
        collectedDateTime: z.string().optional(),
        _collectedDateTime: z.lazy(() => createElementSchema()).optional(),
        collectedPeriod: createPeriodSchema().optional(),
      });

    return baseSchema;
  });
}
