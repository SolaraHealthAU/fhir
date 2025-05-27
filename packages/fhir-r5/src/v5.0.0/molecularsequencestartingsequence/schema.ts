import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceStartingSequenceSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceStartingSequence> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      genomeAssembly: z.lazy(() => createCodeableConceptSchema()).optional(),
      chromosome: z.lazy(() => createCodeableConceptSchema()).optional(),
      sequenceCodeableConcept: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      sequenceString: z.string().optional(),
      _sequenceString: z.lazy(() => createElementSchema()).optional(),
      sequenceReference: z.lazy(() => createReferenceSchema()).optional(),
      windowStart: primitives.createIntegerSchema().optional(),
      _windowStart: z.lazy(() => createElementSchema()).optional(),
      windowEnd: primitives.createIntegerSchema().optional(),
      _windowEnd: z.lazy(() => createElementSchema()).optional(),
      orientation: primitives.createCodeSchema().optional(),
      _orientation: z.lazy(() => createElementSchema()).optional(),
      strand: primitives.createCodeSchema().optional(),
      _strand: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
