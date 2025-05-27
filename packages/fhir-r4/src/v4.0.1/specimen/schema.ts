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
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createSpecimenCollectionSchema } from "../specimencollection/schema";
import { createSpecimenProcessingSchema } from "../specimenprocessing/schema";
import { createSpecimenContainerSchema } from "../specimencontainer/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenSchema() {
  const baseSchema: z.ZodType<types.Specimen> = z.object({
    resourceType: z.literal("Specimen"),
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
    accessionIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    status: z
      .enum(["available", "unavailable", "unsatisfactory", "entered-in-error"])
      .optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    receivedTime: primitives.createDateTimeSchema().optional(),
    _receivedTime: z.lazy(() => createElementSchema()).optional(),
    parent: z.array(z.lazy(() => createReferenceSchema())).optional(),
    request: z.array(z.lazy(() => createReferenceSchema())).optional(),
    collection: z.lazy(() => createSpecimenCollectionSchema()).optional(),
    processing: z
      .array(z.lazy(() => createSpecimenProcessingSchema()))
      .optional(),
    container: z
      .array(z.lazy(() => createSpecimenContainerSchema()))
      .optional(),
    condition: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
