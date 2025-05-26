import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMolecularSequenceReferenceSeqSchema } from "../molecularsequencereferenceseq/schema";
import { createMolecularSequenceVariantSchema } from "../molecularsequencevariant/schema";
import { createMolecularSequenceQualitySchema } from "../molecularsequencequality/schema";
import { createMolecularSequenceRepositorySchema } from "../molecularsequencerepository/schema";
import { createMolecularSequenceStructureVariantSchema } from "../molecularsequencestructurevariant/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceSchema() {
  const baseSchema: z.ZodType<types.MolecularSequence> = z.object({
    resourceType: z.literal("MolecularSequence"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    type: z.enum(["aa", "dna", "rna"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    coordinateSystem: primitives.createIntegerSchema(),
    _coordinateSystem: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()).optional(),
    specimen: z.lazy(() => createReferenceSchema()).optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    referenceSeq: z
      .lazy(() => createMolecularSequenceReferenceSeqSchema())
      .optional(),
    variant: z
      .array(z.lazy(() => createMolecularSequenceVariantSchema()))
      .optional(),
    observedSeq: primitives.createStringSchema().optional(),
    _observedSeq: z.lazy(() => createElementSchema()).optional(),
    quality: z
      .array(z.lazy(() => createMolecularSequenceQualitySchema()))
      .optional(),
    readCoverage: primitives.createIntegerSchema().optional(),
    _readCoverage: z.lazy(() => createElementSchema()).optional(),
    repository: z
      .array(z.lazy(() => createMolecularSequenceRepositorySchema()))
      .optional(),
    pointer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    structureVariant: z
      .array(z.lazy(() => createMolecularSequenceStructureVariantSchema()))
      .optional(),
  });

  return baseSchema;
}
