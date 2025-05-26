import { z } from "zod";
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
  createDataRequirementSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createGuidanceResponseSchema() {
  const baseSchema: z.ZodType<types.GuidanceResponse> = z.object({
    resourceType: z.literal("GuidanceResponse"),
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
    requestIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    moduleUri: z.string().optional(),
    _moduleUri: z.lazy(() => createElementSchema()).optional(),
    moduleCanonical: z.string().optional(),
    _moduleCanonical: z.lazy(() => createElementSchema()).optional(),
    moduleCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    status: z.enum([
      "success",
      "data-requested",
      "data-required",
      "in-progress",
      "failure",
      "entered-in-error",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    occurrenceDateTime: primitives.createDateTimeSchema().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    evaluationMessage: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    outputParameters: z.lazy(() => createReferenceSchema()).optional(),
    result: z.lazy(() => createReferenceSchema()).optional(),
    dataRequirement: z
      .array(z.lazy(() => createDataRequirementSchema()))
      .optional(),
  });

  return baseSchema;
}
