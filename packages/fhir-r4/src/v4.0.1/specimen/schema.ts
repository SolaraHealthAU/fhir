import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Specimen", () => {
    const baseSchema: z.ZodType<types.Specimen> = z.strictObject({
      resourceType: z.literal("Specimen"),
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
      accessionIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      status: z
        .enum([
          "available",
          "unavailable",
          "unsatisfactory",
          "entered-in-error",
        ])
        .optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      receivedTime: primitives.getDateTimeSchema().optional(),
      _receivedTime: z.lazy(() => createElementSchema()).optional(),
      parent: z.array(createReferenceSchema()).optional(),
      request: z.array(createReferenceSchema()).optional(),
      collection: createSpecimenCollectionSchema().optional(),
      processing: z.array(createSpecimenProcessingSchema()).optional(),
      container: z.array(createSpecimenContainerSchema()).optional(),
      condition: z.array(createCodeableConceptSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
