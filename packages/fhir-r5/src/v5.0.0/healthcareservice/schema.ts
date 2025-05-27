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
  createAttachmentSchema,
  createExtendedContactDetailSchema,
  createAvailabilitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createHealthcareServiceEligibilitySchema } from "../healthcareserviceeligibility/schema";

/* Generated from FHIR JSON Schema */

export function createHealthcareServiceSchema() {
  const baseSchema: z.ZodType<types.HealthcareService> = z.object({
    resourceType: z.literal("HealthcareService"),
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
    providedBy: z.lazy(() => createReferenceSchema()).optional(),
    offeredIn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    specialty: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    location: z.array(z.lazy(() => createReferenceSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createMarkdownSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    extraDetails: primitives.createMarkdownSchema().optional(),
    _extraDetails: z.lazy(() => createElementSchema()).optional(),
    photo: z.lazy(() => createAttachmentSchema()).optional(),
    contact: z
      .array(z.lazy(() => createExtendedContactDetailSchema()))
      .optional(),
    coverageArea: z.array(z.lazy(() => createReferenceSchema())).optional(),
    serviceProvisionCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    eligibility: z
      .array(z.lazy(() => createHealthcareServiceEligibilitySchema()))
      .optional(),
    program: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    characteristic: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    communication: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    referralMethod: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    appointmentRequired: primitives.createBooleanSchema().optional(),
    _appointmentRequired: z.lazy(() => createElementSchema()).optional(),
    availability: z.array(z.lazy(() => createAvailabilitySchema())).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
