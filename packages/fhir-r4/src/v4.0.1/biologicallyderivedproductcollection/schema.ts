import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductCollectionSchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProductCollection> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      collector: z.lazy(() => createReferenceSchema()).optional(),
      source: z.lazy(() => createReferenceSchema()).optional(),
      collectedDateTime: z.string().optional(),
      _collectedDateTime: z.lazy(() => createElementSchema()).optional(),
      collectedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    });

  return baseSchema;
}
