import { z } from "zod";
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
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPersonLinkSchema } from "../personlink/schema";

/* Generated from FHIR JSON Schema */

export function createPersonSchema() {
  const baseSchema: z.ZodType<types.Person> = z.object({
    resourceType: z.literal("Person"),
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
    name: z.array(z.lazy(() => createHumanNameSchema())).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    gender: z.enum(["male", "female", "other", "unknown"]).optional(),
    _gender: z.lazy(() => createElementSchema()).optional(),
    birthDate: primitives.createDateSchema().optional(),
    _birthDate: z.lazy(() => createElementSchema()).optional(),
    address: z.array(z.lazy(() => createAddressSchema())).optional(),
    photo: z.lazy(() => createAttachmentSchema()).optional(),
    managingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    active: primitives.createBooleanSchema().optional(),
    _active: z.lazy(() => createElementSchema()).optional(),
    link: z.array(z.lazy(() => createPersonLinkSchema())).optional(),
  });

  return baseSchema;
}
