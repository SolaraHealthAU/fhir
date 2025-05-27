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
  return getCachedSchema("AllergyIntolerance", () => {
    const baseSchema: z.ZodType<types.AllergyIntolerance> = z.strictObject({
      resourceType: z.literal("AllergyIntolerance"),
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
      clinicalStatus: createCodeableConceptSchema().optional(),
      verificationStatus: createCodeableConceptSchema().optional(),
      type: z.enum(["allergy", "intolerance"]).optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      category: z.array(z.any()).optional(),
      _category: z.array(z.lazy(() => createElementSchema())).optional(),
      criticality: z.enum(["low", "high", "unable-to-assess"]).optional(),
      _criticality: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      patient: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      onsetDateTime: z.string().optional(),
      _onsetDateTime: z.lazy(() => createElementSchema()).optional(),
      onsetAge: createAgeSchema().optional(),
      onsetPeriod: createPeriodSchema().optional(),
      onsetRange: createRangeSchema().optional(),
      onsetString: z.string().optional(),
      _onsetString: z.lazy(() => createElementSchema()).optional(),
      recordedDate: primitives.getDateTimeSchema().optional(),
      _recordedDate: z.lazy(() => createElementSchema()).optional(),
      recorder: createReferenceSchema().optional(),
      asserter: createReferenceSchema().optional(),
      lastOccurrence: primitives.getDateTimeSchema().optional(),
      _lastOccurrence: z.lazy(() => createElementSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      reaction: z.array(createAllergyIntoleranceReactionSchema()).optional(),
    });

    return baseSchema;
  });
}
