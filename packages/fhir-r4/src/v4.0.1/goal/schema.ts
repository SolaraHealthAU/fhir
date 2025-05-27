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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createGoalTargetSchema } from "../goaltarget/schema";

/* Generated from FHIR JSON Schema */

export function createGoalSchema() {
  return getCachedSchema("Goal", () => {
    const baseSchema: z.ZodType<types.Goal> = z.strictObject({
      resourceType: z.literal("Goal"),
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
      lifecycleStatus: z.enum([
        "proposed",
        "planned",
        "accepted",
        "active",
        "on-hold",
        "completed",
        "cancelled",
        "entered-in-error",
        "rejected",
      ]),
      _lifecycleStatus: z.lazy(() => createElementSchema()).optional(),
      achievementStatus: createCodeableConceptSchema().optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      priority: createCodeableConceptSchema().optional(),
      description: createCodeableConceptSchema(),
      subject: createReferenceSchema(),
      startDate: z.string().optional(),
      _startDate: z.lazy(() => createElementSchema()).optional(),
      startCodeableConcept: createCodeableConceptSchema().optional(),
      target: z.array(createGoalTargetSchema()).optional(),
      statusDate: primitives.getDateSchema().optional(),
      _statusDate: z.lazy(() => createElementSchema()).optional(),
      statusReason: primitives.getStringSchema().optional(),
      _statusReason: z.lazy(() => createElementSchema()).optional(),
      expressedBy: createReferenceSchema().optional(),
      addresses: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      outcomeCode: z.array(createCodeableConceptSchema()).optional(),
      outcomeReference: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
