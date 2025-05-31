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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: z.enum(["indel", "snp", "unknown"]),
        _type: createElementSchema().optional(),
        standardSequence: createCodeableConceptSchema().optional(),
        start: primitives.getIntegerSchema().optional(),
        _start: createElementSchema().optional(),
        end: primitives.getIntegerSchema().optional(),
        _end: createElementSchema().optional(),
        score: createQuantitySchema().optional(),
        method: createCodeableConceptSchema().optional(),
        truthTP: primitives.getDecimalSchema().optional(),
        _truthTP: createElementSchema().optional(),
        queryTP: primitives.getDecimalSchema().optional(),
        _queryTP: createElementSchema().optional(),
        truthFN: primitives.getDecimalSchema().optional(),
        _truthFN: createElementSchema().optional(),
        queryFP: primitives.getDecimalSchema().optional(),
        _queryFP: createElementSchema().optional(),
        gtFP: primitives.getDecimalSchema().optional(),
        _gtFP: createElementSchema().optional(),
        precision: primitives.getDecimalSchema().optional(),
        _precision: createElementSchema().optional(),
        recall: primitives.getDecimalSchema().optional(),
        _recall: createElementSchema().optional(),
        fScore: primitives.getDecimalSchema().optional(),
        _fScore: createElementSchema().optional(),
        roc: createMolecularSequenceRocSchema().optional(),
      });

    return baseSchema;
  });
}
