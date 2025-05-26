import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
  createAttachmentSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createRelatedPersonCommunicationSchema } from "../relatedpersoncommunication/schema";

/* Generated from FHIR JSON Schema */

export function createRelatedPersonSchema() {
  const baseSchema: z.ZodType<types.RelatedPerson> = z.object({
    resourceType: z.literal("RelatedPerson"),
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
    patient: z.lazy(() => createReferenceSchema()),
    relationship: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    name: z.array(z.lazy(() => createHumanNameSchema())).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    gender: z.enum(["male", "female", "other", "unknown"]).optional(),
    _gender: z.lazy(() => createElementSchema()).optional(),
    birthDate: primitives.createDateSchema().optional(),
    _birthDate: z.lazy(() => createElementSchema()).optional(),
    address: z.array(z.lazy(() => createAddressSchema())).optional(),
    photo: z.array(z.lazy(() => createAttachmentSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    communication: z
      .array(z.lazy(() => createRelatedPersonCommunicationSchema()))
      .optional(),
  });

  return baseSchema;
}
