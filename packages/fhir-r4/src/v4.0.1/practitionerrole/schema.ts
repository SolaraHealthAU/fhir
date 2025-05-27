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
  createCodeableConceptSchema,
  createContactPointSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPractitionerRoleAvailableTimeSchema } from "../practitionerroleavailabletime/schema";
import { createPractitionerRoleNotAvailableSchema } from "../practitionerrolenotavailable/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerRoleSchema() {
  return getCachedSchema("PractitionerRole", () => {
    const baseSchema: z.ZodType<types.PractitionerRole> = z.strictObject({
      resourceType: z.literal("PractitionerRole"),
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
      period: createPeriodSchema().optional(),
      practitioner: createReferenceSchema().optional(),
      organization: createReferenceSchema().optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      specialty: z.array(createCodeableConceptSchema()).optional(),
      location: z.array(createReferenceSchema()).optional(),
      healthcareService: z.array(createReferenceSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      availableTime: z
        .array(createPractitionerRoleAvailableTimeSchema())
        .optional(),
      notAvailable: z
        .array(createPractitionerRoleNotAvailableSchema())
        .optional(),
      availabilityExceptions: primitives.getStringSchema().optional(),
      _availabilityExceptions: z.lazy(() => createElementSchema()).optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
