import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
  createReferenceSchema,
  createTimingSchema,
  createAgeSchema,
  createRangeSchema,
  createDurationSchema,
  createCodeableReferenceSchema,
  createQuantitySchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createActivityDefinitionParticipantSchema } from "../activitydefinitionparticipant/schema";
import { createActivityDefinitionDynamicValueSchema } from "../activitydefinitiondynamicvalue/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionSchema() {
  const baseSchema: z.ZodType<types.ActivityDefinition> = z.object({
    resourceType: z.literal("ActivityDefinition"),
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
    versionAlgorithmString: z.string().optional(),
    _versionAlgorithmString: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmCoding: z.lazy(() => createCodingSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    copyrightLabel: primitives.createStringSchema().optional(),
    _copyrightLabel: z.lazy(() => createElementSchema()).optional(),
    approvalDate: primitives.createDateSchema().optional(),
    _approvalDate: z.lazy(() => createElementSchema()).optional(),
    lastReviewDate: primitives.createDateSchema().optional(),
    _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    topic: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    author: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    editor: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    reviewer: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    endorser: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    subtitle: primitives.createStringSchema().optional(),
    _subtitle: z.lazy(() => createElementSchema()).optional(),
    subjectCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    subjectReference: z.lazy(() => createReferenceSchema()).optional(),
    subjectCanonical: z.string().optional(),
    _subjectCanonical: z.lazy(() => createElementSchema()).optional(),
    usage: primitives.createMarkdownSchema().optional(),
    _usage: z.lazy(() => createElementSchema()).optional(),
    library: z.array(primitives.createCanonicalSchema()).optional(),
    kind: primitives.createCodeSchema().optional(),
    _kind: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    timingAge: z.lazy(() => createAgeSchema()).optional(),
    timingRange: z.lazy(() => createRangeSchema()).optional(),
    timingDuration: z.lazy(() => createDurationSchema()).optional(),
    asNeededBoolean: z.boolean().optional(),
    _asNeededBoolean: z.lazy(() => createElementSchema()).optional(),
    asNeededCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    location: z.lazy(() => createCodeableReferenceSchema()).optional(),
    participant: z
      .array(z.lazy(() => createActivityDefinitionParticipantSchema()))
      .optional(),
    productReference: z.lazy(() => createReferenceSchema()).optional(),
    productCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    dosage: z.array(z.lazy(() => createDosageSchema())).optional(),
    bodySite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    specimenRequirement: z.array(primitives.createCanonicalSchema()).optional(),
    observationRequirement: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    observationResultRequirement: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    transform: primitives.createCanonicalSchema().optional(),
    dynamicValue: z
      .array(z.lazy(() => createActivityDefinitionDynamicValueSchema()))
      .optional(),
  });

  return baseSchema;
}
