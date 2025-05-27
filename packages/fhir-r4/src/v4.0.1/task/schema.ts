import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
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
    status: z.enum([
      "draft",
      "requested",
      "received",
      "accepted",
      "rejected",
      "ready",
      "cancelled",
      "in-progress",
      "on-hold",
      "failed",
      "completed",
      "entered-in-error",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    businessStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: z.enum([
      "unknown",
      "proposal",
      "plan",
      "order",
      "original-order",
      "reflex-order",
      "filler-order",
      "instance-order",
      "option",
    ]),
    _intent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    focus: z.lazy(() => createReferenceSchema()).optional(),
    for: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    executionPeriod: z.lazy(() => createPeriodSchema()).optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    lastModified: primitives.createDateTimeSchema().optional(),
    _lastModified: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    performerType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    reasonReference: z.lazy(() => createReferenceSchema()).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
    restriction: z.lazy(() => createTaskRestrictionSchema()).optional(),
    input: z.array(z.lazy(() => createTaskInputSchema())).optional(),
    output: z.array(z.lazy(() => createTaskOutputSchema())).optional(),
  });

  return baseSchema;
}
