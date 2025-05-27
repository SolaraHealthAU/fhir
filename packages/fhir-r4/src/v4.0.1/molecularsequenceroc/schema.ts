import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceRocSchema() {
  return getCachedSchema("MolecularSequenceRoc", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceRoc> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      score: z.array(primitives.getIntegerSchema()).optional(),
      _score: z.array(z.lazy(() => createElementSchema())).optional(),
      numTP: z.array(primitives.getIntegerSchema()).optional(),
      _numTP: z.array(z.lazy(() => createElementSchema())).optional(),
      numFP: z.array(primitives.getIntegerSchema()).optional(),
      _numFP: z.array(z.lazy(() => createElementSchema())).optional(),
      numFN: z.array(primitives.getIntegerSchema()).optional(),
      _numFN: z.array(z.lazy(() => createElementSchema())).optional(),
      precision: z.array(primitives.getDecimalSchema()).optional(),
      _precision: z.array(z.lazy(() => createElementSchema())).optional(),
      sensitivity: z.array(primitives.getDecimalSchema()).optional(),
      _sensitivity: z.array(z.lazy(() => createElementSchema())).optional(),
      fMeasure: z.array(primitives.getDecimalSchema()).optional(),
      _fMeasure: z.array(z.lazy(() => createElementSchema())).optional(),
    });

    return baseSchema;
  });
}
