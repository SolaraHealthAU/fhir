import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createMolecularSequenceRocSchema } from "../molecularsequenceroc/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceQualitySchema() {
  return getCachedSchema("MolecularSequenceQuality", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceQuality> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: z.enum(["indel", "snp", "unknown"]),
        _type: z.lazy(() => createElementSchema()).optional(),
        standardSequence: createCodeableConceptSchema().optional(),
        start: primitives.getIntegerSchema().optional(),
        _start: z.lazy(() => createElementSchema()).optional(),
        end: primitives.getIntegerSchema().optional(),
        _end: z.lazy(() => createElementSchema()).optional(),
        score: createQuantitySchema().optional(),
        method: createCodeableConceptSchema().optional(),
        truthTP: primitives.getDecimalSchema().optional(),
        _truthTP: z.lazy(() => createElementSchema()).optional(),
        queryTP: primitives.getDecimalSchema().optional(),
        _queryTP: z.lazy(() => createElementSchema()).optional(),
        truthFN: primitives.getDecimalSchema().optional(),
        _truthFN: z.lazy(() => createElementSchema()).optional(),
        queryFP: primitives.getDecimalSchema().optional(),
        _queryFP: z.lazy(() => createElementSchema()).optional(),
        gtFP: primitives.getDecimalSchema().optional(),
        _gtFP: z.lazy(() => createElementSchema()).optional(),
        precision: primitives.getDecimalSchema().optional(),
        _precision: z.lazy(() => createElementSchema()).optional(),
        recall: primitives.getDecimalSchema().optional(),
        _recall: z.lazy(() => createElementSchema()).optional(),
        fScore: primitives.getDecimalSchema().optional(),
        _fScore: z.lazy(() => createElementSchema()).optional(),
        roc: createMolecularSequenceRocSchema().optional(),
      });

    return baseSchema;
  });
}
