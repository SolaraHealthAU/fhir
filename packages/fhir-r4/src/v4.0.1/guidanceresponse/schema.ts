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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      requestIdentifier: createIdentifierSchema().optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      moduleUri: z.string().optional(),
      _moduleUri: createElementSchema().optional(),
      moduleCanonical: z.string().optional(),
      _moduleCanonical: createElementSchema().optional(),
      moduleCodeableConcept: createCodeableConceptSchema().optional(),
      status: z.enum([
        "success",
        "data-requested",
        "data-required",
        "in-progress",
        "failure",
        "entered-in-error",
      ]),
      _status: createElementSchema().optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      occurrenceDateTime: primitives.getDateTimeSchema().optional(),
      _occurrenceDateTime: createElementSchema().optional(),
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
