import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createMolecularSequenceRocSchema } from "../molecularsequenceroc/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceQualitySchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceQuality> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.enum(["indel", "snp", "unknown"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    standardSequence: z.lazy(() => createCodeableConceptSchema()).optional(),
    start: primitives.createIntegerSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createIntegerSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
    score: z.lazy(() => createQuantitySchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    truthTP: primitives.createDecimalSchema().optional(),
    _truthTP: z.lazy(() => createElementSchema()).optional(),
    queryTP: primitives.createDecimalSchema().optional(),
    _queryTP: z.lazy(() => createElementSchema()).optional(),
    truthFN: primitives.createDecimalSchema().optional(),
    _truthFN: z.lazy(() => createElementSchema()).optional(),
    queryFP: primitives.createDecimalSchema().optional(),
    _queryFP: z.lazy(() => createElementSchema()).optional(),
    gtFP: primitives.createDecimalSchema().optional(),
    _gtFP: z.lazy(() => createElementSchema()).optional(),
    precision: primitives.createDecimalSchema().optional(),
    _precision: z.lazy(() => createElementSchema()).optional(),
    recall: primitives.createDecimalSchema().optional(),
    _recall: z.lazy(() => createElementSchema()).optional(),
    fScore: primitives.createDecimalSchema().optional(),
    _fScore: z.lazy(() => createElementSchema()).optional(),
    roc: z.lazy(() => createMolecularSequenceRocSchema()).optional(),
  });

  return baseSchema;
}
