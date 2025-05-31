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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      score: z.array(primitives.getIntegerSchema()).optional(),
      _score: z.array(createElementSchema()).optional(),
      numTP: z.array(primitives.getIntegerSchema()).optional(),
      _numTP: z.array(createElementSchema()).optional(),
      numFP: z.array(primitives.getIntegerSchema()).optional(),
      _numFP: z.array(createElementSchema()).optional(),
      numFN: z.array(primitives.getIntegerSchema()).optional(),
      _numFN: z.array(createElementSchema()).optional(),
      precision: z.array(primitives.getDecimalSchema()).optional(),
      _precision: z.array(createElementSchema()).optional(),
      sensitivity: z.array(primitives.getDecimalSchema()).optional(),
      _sensitivity: z.array(createElementSchema()).optional(),
      fMeasure: z.array(primitives.getDecimalSchema()).optional(),
      _fMeasure: z.array(createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
