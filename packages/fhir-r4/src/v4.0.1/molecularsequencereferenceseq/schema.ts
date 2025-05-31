import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceReferenceSeqSchema() {
  return getCachedSchema("MolecularSequenceReferenceSeq", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceReferenceSeq> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        chromosome: createCodeableConceptSchema().optional(),
        genomeBuild: primitives.getStringSchema().optional(),
        _genomeBuild: createElementSchema().optional(),
        orientation: z.enum(["sense", "antisense"]).optional(),
        _orientation: createElementSchema().optional(),
        referenceSeqId: createCodeableConceptSchema().optional(),
        referenceSeqPointer: createReferenceSchema().optional(),
        referenceSeqString: primitives.getStringSchema().optional(),
        _referenceSeqString: createElementSchema().optional(),
        strand: z.enum(["watson", "crick"]).optional(),
        _strand: createElementSchema().optional(),
        windowStart: primitives.getIntegerSchema().optional(),
        _windowStart: createElementSchema().optional(),
        windowEnd: primitives.getIntegerSchema().optional(),
        _windowEnd: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
