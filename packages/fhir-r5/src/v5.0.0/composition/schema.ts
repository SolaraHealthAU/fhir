import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createUsageContextSchema,
  createAnnotationSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCompositionAttesterSchema } from "../compositionattester/schema";
import { createCompositionEventSchema } from "../compositionevent/schema";
import { createCompositionSectionSchema } from "../compositionsection/schema";

/* Generated from FHIR JSON Schema */

export function createCompositionSchema() {
  const baseSchema: z.ZodType<types.Composition> = z.object({
    resourceType: z.literal("Composition"),
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
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    attester: z
      .array(z.lazy(() => createCompositionAttesterSchema()))
      .optional(),
    custodian: z.lazy(() => createReferenceSchema()).optional(),
    relatesTo: z.array(z.lazy(() => createRelatedArtifactSchema())).optional(),
    event: z.array(z.lazy(() => createCompositionEventSchema())).optional(),
    section: z.array(z.lazy(() => createCompositionSectionSchema())).optional(),
  });

  return baseSchema;
}
