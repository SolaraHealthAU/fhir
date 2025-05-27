import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceVariantSchema() {
  return getCachedSchema("MolecularSequenceVariant", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceVariant> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        start: primitives.getIntegerSchema().optional(),
        _start: z.lazy(() => createElementSchema()).optional(),
        end: primitives.getIntegerSchema().optional(),
        _end: z.lazy(() => createElementSchema()).optional(),
        observedAllele: primitives.getStringSchema().optional(),
        _observedAllele: z.lazy(() => createElementSchema()).optional(),
        referenceAllele: primitives.getStringSchema().optional(),
        _referenceAllele: z.lazy(() => createElementSchema()).optional(),
        cigar: primitives.getStringSchema().optional(),
        _cigar: z.lazy(() => createElementSchema()).optional(),
        variantPointer: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
