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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createScheduleSchema() {
  return getCachedSchema("Schedule", () => {
    const baseSchema: z.ZodType<types.Schedule> = z.strictObject({
      resourceType: z.literal("Schedule"),
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
      active: primitives.getBooleanSchema().optional(),
      _active: z.lazy(() => createElementSchema()).optional(),
      serviceCategory: z.array(createCodeableConceptSchema()).optional(),
      serviceType: z.array(createCodeableConceptSchema()).optional(),
      specialty: z.array(createCodeableConceptSchema()).optional(),
      actor: z.array(createReferenceSchema()),
      planningHorizon: createPeriodSchema().optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
