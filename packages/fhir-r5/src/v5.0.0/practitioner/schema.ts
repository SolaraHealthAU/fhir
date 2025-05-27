import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
  createAttachmentSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPractitionerQualificationSchema } from "../practitionerqualification/schema";
import { createPractitionerCommunicationSchema } from "../practitionercommunication/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerSchema() {
  const baseSchema: z.ZodType<types.Practitioner> = z.object({
    resourceType: z.literal("Practitioner"),
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
    name: z.array(z.lazy(() => createHumanNameSchema())).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    gender: primitives.createCodeSchema().optional(),
    _gender: z.lazy(() => createElementSchema()).optional(),
    birthDate: primitives.createDateSchema().optional(),
    _birthDate: z.lazy(() => createElementSchema()).optional(),
    deceasedBoolean: z.boolean().optional(),
    _deceasedBoolean: z.lazy(() => createElementSchema()).optional(),
    deceasedDateTime: z.string().optional(),
    _deceasedDateTime: z.lazy(() => createElementSchema()).optional(),
    address: z.array(z.lazy(() => createAddressSchema())).optional(),
    photo: z.array(z.lazy(() => createAttachmentSchema())).optional(),
    qualification: z
      .array(z.lazy(() => createPractitionerQualificationSchema()))
      .optional(),
    communication: z
      .array(z.lazy(() => createPractitionerCommunicationSchema()))
      .optional(),
  });

  return baseSchema;
}
