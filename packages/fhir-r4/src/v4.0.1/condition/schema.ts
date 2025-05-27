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
import { createConditionStageSchema } from "../conditionstage/schema";
import { createConditionEvidenceSchema } from "../conditionevidence/schema";

/* Generated from FHIR JSON Schema */

export function createConditionSchema() {
  return getCachedSchema("Condition", () => {
    const baseSchema: z.ZodType<types.Condition> = z.strictObject({
      resourceType: z.literal("Condition"),
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
      category: z.array(createCodeableConceptSchema()).optional(),
      severity: createCodeableConceptSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      bodySite: z.array(createCodeableConceptSchema()).optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      onsetDateTime: z.string().optional(),
      _onsetDateTime: z.lazy(() => createElementSchema()).optional(),
      onsetAge: createAgeSchema().optional(),
      onsetPeriod: createPeriodSchema().optional(),
      onsetRange: createRangeSchema().optional(),
      onsetString: z.string().optional(),
      _onsetString: z.lazy(() => createElementSchema()).optional(),
      abatementDateTime: z.string().optional(),
      _abatementDateTime: z.lazy(() => createElementSchema()).optional(),
      abatementAge: createAgeSchema().optional(),
      abatementPeriod: createPeriodSchema().optional(),
      abatementRange: createRangeSchema().optional(),
      abatementString: z.string().optional(),
      _abatementString: z.lazy(() => createElementSchema()).optional(),
      recordedDate: primitives.getDateTimeSchema().optional(),
      _recordedDate: z.lazy(() => createElementSchema()).optional(),
      recorder: createReferenceSchema().optional(),
      asserter: createReferenceSchema().optional(),
      stage: z.array(createConditionStageSchema()).optional(),
      evidence: z.array(createConditionEvidenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
