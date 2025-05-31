import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Task", () => {
    const baseSchema: z.ZodType<types.Task> = z.strictObject({
      resourceType: z.literal("Task"),
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
      identifier: z.array(createIdentifierSchema()).optional(),
      instantiatesCanonical: primitives.getCanonicalSchema().optional(),
      instantiatesUri: primitives.getUriSchema().optional(),
      _instantiatesUri: createElementSchema().optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      groupIdentifier: createIdentifierSchema().optional(),
      partOf: z.array(createReferenceSchema()).optional(),
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
      _status: createElementSchema().optional(),
      statusReason: createCodeableConceptSchema().optional(),
      businessStatus: createCodeableConceptSchema().optional(),
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
      _intent: createElementSchema().optional(),
      priority: primitives.getCodeSchema().optional(),
      _priority: createElementSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      focus: createReferenceSchema().optional(),
      for: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      executionPeriod: createPeriodSchema().optional(),
      authoredOn: primitives.getDateTimeSchema().optional(),
      _authoredOn: createElementSchema().optional(),
      lastModified: primitives.getDateTimeSchema().optional(),
      _lastModified: createElementSchema().optional(),
      requester: createReferenceSchema().optional(),
      performerType: z.array(createCodeableConceptSchema()).optional(),
      owner: createReferenceSchema().optional(),
      location: createReferenceSchema().optional(),
      reasonCode: createCodeableConceptSchema().optional(),
      reasonReference: createReferenceSchema().optional(),
      insurance: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      relevantHistory: z.array(createReferenceSchema()).optional(),
      restriction: createTaskRestrictionSchema().optional(),
      input: z.array(createTaskInputSchema()).optional(),
      output: z.array(createTaskOutputSchema()).optional(),
    });

    return baseSchema;
  });
}
