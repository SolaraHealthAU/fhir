import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMolecularSequenceRelativeSchema } from "../molecularsequencerelative/schema";

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
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    focus: z.array(z.lazy(() => createReferenceSchema())).optional(),
    specimen: z.lazy(() => createReferenceSchema()).optional(),
    device: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    literal: primitives.createStringSchema().optional(),
    _literal: z.lazy(() => createElementSchema()).optional(),
    formatted: z.array(z.lazy(() => createAttachmentSchema())).optional(),
    relative: z
      .array(z.lazy(() => createMolecularSequenceRelativeSchema()))
      .optional(),
  });

  return baseSchema;
}
