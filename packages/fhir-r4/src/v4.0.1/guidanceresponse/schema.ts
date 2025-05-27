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
  createDataRequirementSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createGuidanceResponseSchema() {
  return getCachedSchema("GuidanceResponse", () => {
    const baseSchema: z.ZodType<types.GuidanceResponse> = z.strictObject({
      resourceType: z.literal("GuidanceResponse"),
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
      requestIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      moduleUri: z.string().optional(),
      _moduleUri: z.lazy(() => createElementSchema()).optional(),
      moduleCanonical: z.string().optional(),
      _moduleCanonical: z.lazy(() => createElementSchema()).optional(),
      moduleCodeableConcept: createCodeableConceptSchema().optional(),
      status: z.enum([
        "success",
        "data-requested",
        "data-required",
        "in-progress",
        "failure",
        "entered-in-error",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: primitives.getDateTimeSchema().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      performer: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      evaluationMessage: z.array(createReferenceSchema()).optional(),
      outputParameters: createReferenceSchema().optional(),
      result: createReferenceSchema().optional(),
      dataRequirement: z.array(createDataRequirementSchema()).optional(),
    });

    return baseSchema;
  });
}
