import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceReferenceSeqSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceReferenceSeq> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    chromosome: z.lazy(() => createCodeableConceptSchema()).optional(),
    genomeBuild: primitives.createStringSchema().optional(),
    _genomeBuild: z.lazy(() => createElementSchema()).optional(),
    orientation: z.enum(["sense", "antisense"]).optional(),
    _orientation: z.lazy(() => createElementSchema()).optional(),
    referenceSeqId: z.lazy(() => createCodeableConceptSchema()).optional(),
    referenceSeqPointer: z.lazy(() => createReferenceSchema()).optional(),
    referenceSeqString: primitives.createStringSchema().optional(),
    _referenceSeqString: z.lazy(() => createElementSchema()).optional(),
    strand: z.enum(["watson", "crick"]).optional(),
    _strand: z.lazy(() => createElementSchema()).optional(),
    windowStart: primitives.createIntegerSchema().optional(),
    _windowStart: z.lazy(() => createElementSchema()).optional(),
    windowEnd: primitives.createIntegerSchema().optional(),
    _windowEnd: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
