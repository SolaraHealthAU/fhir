import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createTaskPerformerSchema } from "../taskperformer/schema";
import { createTaskRestrictionSchema } from "../taskrestriction/schema";
import { createTaskInputSchema } from "../taskinput/schema";
import { createTaskOutputSchema } from "../taskoutput/schema";

/* Generated from FHIR JSON Schema */

export function createTaskSchema() {
  const baseSchema: z.ZodType<types.Task> = z.object({
    resourceType: z.literal("Task"),
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
    instantiatesCanonical: primitives.createCanonicalSchema().optional(),
    instantiatesUri: primitives.createUriSchema().optional(),
    _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableReferenceSchema()).optional(),
    businessStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    focus: z.lazy(() => createReferenceSchema()).optional(),
    for: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    requestedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    executionPeriod: z.lazy(() => createPeriodSchema()).optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    lastModified: primitives.createDateTimeSchema().optional(),
    _lastModified: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    requestedPerformer: z
      .array(z.lazy(() => createCodeableReferenceSchema()))
      .optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    performer: z.array(z.lazy(() => createTaskPerformerSchema())).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
    restriction: z.lazy(() => createTaskRestrictionSchema()).optional(),
    input: z.array(z.lazy(() => createTaskInputSchema())).optional(),
    output: z.array(z.lazy(() => createTaskOutputSchema())).optional(),
  });

  return baseSchema;
}
