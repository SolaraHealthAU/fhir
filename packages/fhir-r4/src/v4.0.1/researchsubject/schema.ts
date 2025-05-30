import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createResearchSubjectSchema() {
  return getCachedSchema("ResearchSubject", () => {
    const baseSchema: z.ZodType<types.ResearchSubject> = z.strictObject({
      resourceType: z.literal("ResearchSubject"),
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
      status: z.enum([
        "candidate",
        "eligible",
        "follow-up",
        "ineligible",
        "not-registered",
        "off-study",
        "on-study",
        "on-study-intervention",
        "on-study-observation",
        "pending-on-study",
        "potential-candidate",
        "screening",
        "withdrawn",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
      study: createReferenceSchema(),
      individual: createReferenceSchema(),
      assignedArm: primitives.getStringSchema().optional(),
      _assignedArm: z.lazy(() => createElementSchema()).optional(),
      actualArm: primitives.getStringSchema().optional(),
      _actualArm: z.lazy(() => createElementSchema()).optional(),
      consent: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
