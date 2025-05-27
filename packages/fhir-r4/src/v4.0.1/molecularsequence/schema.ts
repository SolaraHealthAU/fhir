import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MolecularSequence", () => {
    const baseSchema: z.ZodType<types.MolecularSequence> = z.strictObject({
      resourceType: z.literal("MolecularSequence"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      type: z.enum(["aa", "dna", "rna"]).optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      coordinateSystem: primitives.getIntegerSchema(),
      _coordinateSystem: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema().optional(),
      specimen: createReferenceSchema().optional(),
      device: createReferenceSchema().optional(),
      performer: createReferenceSchema().optional(),
      quantity: createQuantitySchema().optional(),
      referenceSeq: createMolecularSequenceReferenceSeqSchema().optional(),
      variant: z.array(createMolecularSequenceVariantSchema()).optional(),
      observedSeq: primitives.getStringSchema().optional(),
      _observedSeq: z.lazy(() => createElementSchema()).optional(),
      quality: z.array(createMolecularSequenceQualitySchema()).optional(),
      readCoverage: primitives.getIntegerSchema().optional(),
      _readCoverage: z.lazy(() => createElementSchema()).optional(),
      repository: z.array(createMolecularSequenceRepositorySchema()).optional(),
      pointer: z.array(createReferenceSchema()).optional(),
      structureVariant: z
        .array(createMolecularSequenceStructureVariantSchema())
        .optional(),
    });

    return baseSchema;
  });
}
