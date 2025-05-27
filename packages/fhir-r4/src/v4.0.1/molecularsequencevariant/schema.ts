import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceVariantSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceVariant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    start: primitives.createIntegerSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createIntegerSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    observedAllele: primitives.createStringSchema().optional(),
    _observedAllele: z.lazy(() => createElementSchema()).optional(),
    referenceAllele: primitives.createStringSchema().optional(),
    _referenceAllele: z.lazy(() => createElementSchema()).optional(),
    cigar: primitives.createStringSchema().optional(),
    _cigar: z.lazy(() => createElementSchema()).optional(),
    variantPointer: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
