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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAdverseEventSuspectEntitySchema } from "../adverseeventsuspectentity/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventSchema() {
  return getCachedSchema("AdverseEvent", () => {
    const baseSchema: z.ZodType<types.AdverseEvent> = z.strictObject({
      resourceType: z.literal("AdverseEvent"),
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
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      actuality: z.enum(["actual", "potential"]),
      _actuality: z.lazy(() => createElementSchema()).optional(),
      category: z.array(createCodeableConceptSchema()).optional(),
      event: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      detected: primitives.getDateTimeSchema().optional(),
      _detected: z.lazy(() => createElementSchema()).optional(),
      recordedDate: primitives.getDateTimeSchema().optional(),
      _recordedDate: z.lazy(() => createElementSchema()).optional(),
      resultingCondition: z.array(createReferenceSchema()).optional(),
      location: createReferenceSchema().optional(),
      seriousness: createCodeableConceptSchema().optional(),
      severity: createCodeableConceptSchema().optional(),
      outcome: createCodeableConceptSchema().optional(),
      recorder: createReferenceSchema().optional(),
      contributor: z.array(createReferenceSchema()).optional(),
      suspectEntity: z
        .array(createAdverseEventSuspectEntitySchema())
        .optional(),
      subjectMedicalHistory: z.array(createReferenceSchema()).optional(),
      referenceDocument: z.array(createReferenceSchema()).optional(),
      study: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
