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
  createAgeSchema,
  createPeriodSchema,
  createRangeSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAllergyIntoleranceReactionSchema } from "../allergyintolerancereaction/schema";

/* Generated from FHIR JSON Schema */

export function createAllergyIntoleranceSchema() {
  const baseSchema: z.ZodType<types.AllergyIntolerance> = z.object({
    resourceType: z.literal("AllergyIntolerance"),
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
    clinicalStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    verificationStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.enum(["allergy", "intolerance"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.any()).optional(),
    _category: z.array(z.lazy(() => createElementSchema())).optional(),
    criticality: z.enum(["low", "high", "unable-to-assess"]).optional(),
    _criticality: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    onsetDateTime: z.string().optional(),
    _onsetDateTime: z.lazy(() => createElementSchema()).optional(),
    onsetAge: z.lazy(() => createAgeSchema()).optional(),
    onsetPeriod: z.lazy(() => createPeriodSchema()).optional(),
    onsetRange: z.lazy(() => createRangeSchema()).optional(),
    onsetString: z.string().optional(),
    _onsetString: z.lazy(() => createElementSchema()).optional(),
    recordedDate: primitives.createDateTimeSchema().optional(),
    _recordedDate: z.lazy(() => createElementSchema()).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    asserter: z.lazy(() => createReferenceSchema()).optional(),
    lastOccurrence: primitives.createDateTimeSchema().optional(),
    _lastOccurrence: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    reaction: z
      .array(z.lazy(() => createAllergyIntoleranceReactionSchema()))
      .optional(),
  });

  return baseSchema;
}
