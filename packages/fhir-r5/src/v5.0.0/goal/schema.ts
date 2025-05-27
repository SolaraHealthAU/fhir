import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createAnnotationSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createGoalTargetSchema } from "../goaltarget/schema";

/* Generated from FHIR JSON Schema */

export function createGoalSchema() {
  const baseSchema: z.ZodType<types.Goal> = z.object({
    resourceType: z.literal("Goal"),
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
    lifecycleStatus: primitives.createCodeSchema().optional(),
    _lifecycleStatus: z.lazy(() => createElementSchema()).optional(),
    achievementStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    continuous: primitives.createBooleanSchema().optional(),
    _continuous: z.lazy(() => createElementSchema()).optional(),
    priority: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: z.lazy(() => createCodeableConceptSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    startDate: z.string().optional(),
    _startDate: z.lazy(() => createElementSchema()).optional(),
    startCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    target: z.array(z.lazy(() => createGoalTargetSchema())).optional(),
    statusDate: primitives.createDateSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    statusReason: primitives.createStringSchema().optional(),
    _statusReason: z.lazy(() => createElementSchema()).optional(),
    source: z.lazy(() => createReferenceSchema()).optional(),
    addresses: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    outcome: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
  });

  return baseSchema;
}
