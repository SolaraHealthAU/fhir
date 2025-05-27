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
  createContactDetailSchema,
  createUsageContextSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
  createTimingSchema,
  createAgeSchema,
  createRangeSchema,
  createDurationSchema,
  createQuantitySchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createActivityDefinitionParticipantSchema } from "../activitydefinitionparticipant/schema";
import { createActivityDefinitionDynamicValueSchema } from "../activitydefinitiondynamicvalue/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionSchema() {
  return getCachedSchema("ActivityDefinition", () => {
    const baseSchema: z.ZodType<types.ActivityDefinition> = z.strictObject({
      resourceType: z.literal("ActivityDefinition"),
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
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      subtitle: primitives.getStringSchema().optional(),
      _subtitle: z.lazy(() => createElementSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: z.lazy(() => createElementSchema()).optional(),
      subjectCodeableConcept: createCodeableConceptSchema().optional(),
      subjectReference: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: z.lazy(() => createElementSchema()).optional(),
      usage: primitives.getStringSchema().optional(),
      _usage: z.lazy(() => createElementSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: z.lazy(() => createElementSchema()).optional(),
      approvalDate: primitives.getDateSchema().optional(),
      _approvalDate: z.lazy(() => createElementSchema()).optional(),
      lastReviewDate: primitives.getDateSchema().optional(),
      _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
      effectivePeriod: createPeriodSchema().optional(),
      topic: z.array(createCodeableConceptSchema()).optional(),
      author: z.array(createContactDetailSchema()).optional(),
      editor: z.array(createContactDetailSchema()).optional(),
      reviewer: z.array(createContactDetailSchema()).optional(),
      endorser: z.array(createContactDetailSchema()).optional(),
      relatedArtifact: z.array(createRelatedArtifactSchema()).optional(),
      library: z.array(primitives.getCanonicalSchema()).optional(),
      kind: primitives.getCodeSchema().optional(),
      _kind: z.lazy(() => createElementSchema()).optional(),
      profile: primitives.getCanonicalSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      intent: primitives.getCodeSchema().optional(),
      _intent: z.lazy(() => createElementSchema()).optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      timingTiming: createTimingSchema().optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: z.lazy(() => createElementSchema()).optional(),
      timingAge: createAgeSchema().optional(),
      timingPeriod: createPeriodSchema().optional(),
      timingRange: createRangeSchema().optional(),
      timingDuration: createDurationSchema().optional(),
      location: createReferenceSchema().optional(),
      participant: z
        .array(createActivityDefinitionParticipantSchema())
        .optional(),
      productReference: createReferenceSchema().optional(),
      productCodeableConcept: createCodeableConceptSchema().optional(),
      quantity: createQuantitySchema().optional(),
      dosage: z.array(createDosageSchema()).optional(),
      bodySite: z.array(createCodeableConceptSchema()).optional(),
      specimenRequirement: z.array(createReferenceSchema()).optional(),
      observationRequirement: z.array(createReferenceSchema()).optional(),
      observationResultRequirement: z.array(createReferenceSchema()).optional(),
      transform: primitives.getCanonicalSchema().optional(),
      dynamicValue: z
        .array(createActivityDefinitionDynamicValueSchema())
        .optional(),
    });

    return baseSchema;
  });
}
