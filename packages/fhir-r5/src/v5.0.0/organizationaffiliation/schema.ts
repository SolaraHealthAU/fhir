import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createPeriodSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createExtendedContactDetailSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createOrganizationAffiliationSchema() {
  const baseSchema: z.ZodType<types.OrganizationAffiliation> = z.object({
    resourceType: z.literal("OrganizationAffiliation"),
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
    active: primitives.createBooleanSchema().optional(),
    _active: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    organization: z.lazy(() => createReferenceSchema()).optional(),
    participatingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    network: z.array(z.lazy(() => createReferenceSchema())).optional(),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    specialty: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    location: z.array(z.lazy(() => createReferenceSchema())).optional(),
    healthcareService: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    contact: z
      .array(z.lazy(() => createExtendedContactDetailSchema()))
      .optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
