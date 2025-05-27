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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        chromosome: createCodeableConceptSchema().optional(),
        genomeBuild: primitives.getStringSchema().optional(),
        _genomeBuild: z.lazy(() => createElementSchema()).optional(),
        orientation: z.enum(["sense", "antisense"]).optional(),
        _orientation: z.lazy(() => createElementSchema()).optional(),
        referenceSeqId: createCodeableConceptSchema().optional(),
        referenceSeqPointer: createReferenceSchema().optional(),
        referenceSeqString: primitives.getStringSchema().optional(),
        _referenceSeqString: z.lazy(() => createElementSchema()).optional(),
        strand: z.enum(["watson", "crick"]).optional(),
        _strand: z.lazy(() => createElementSchema()).optional(),
        windowStart: primitives.getIntegerSchema().optional(),
        _windowStart: z.lazy(() => createElementSchema()).optional(),
        windowEnd: primitives.getIntegerSchema().optional(),
        _windowEnd: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
