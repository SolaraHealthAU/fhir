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
import { createCarePlanActivitySchema } from "../careplanactivity/schema";

/* Generated from FHIR JSON Schema */

export function createCarePlanSchema() {
  return getCachedSchema("CarePlan", () => {
    const baseSchema: z.ZodType<types.CarePlan> = z.strictObject({
      resourceType: z.literal("CarePlan"),
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
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      replaces: z.array(createReferenceSchema()).optional(),
      partOf: z.array(createReferenceSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      intent: primitives.getCodeSchema(),
      _intent: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      period: createPeriodSchema().optional(),
      created: primitives.getDateTimeSchema().optional(),
      _created: z.lazy(() => createElementSchema()).optional(),
      author: createReferenceSchema().optional(),
      contributor: z.array(createReferenceSchema()).optional(),
      careTeam: z.array(createReferenceSchema()).optional(),
      addresses: z.array(createReferenceSchema()).optional(),
      supportingInfo: z.array(createReferenceSchema()).optional(),
      goal: z.array(createReferenceSchema()).optional(),
      activity: z.array(createCarePlanActivitySchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
    });

    return baseSchema;
  });
}
