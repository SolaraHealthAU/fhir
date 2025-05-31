import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Person", () => {
    const baseSchema: z.ZodType<types.Person> = z.strictObject({
      resourceType: z.literal("Person"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      name: z.array(createHumanNameSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: createElementSchema().optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: createElementSchema().optional(),
      address: z.array(createAddressSchema()).optional(),
      photo: createAttachmentSchema().optional(),
      managingOrganization: createReferenceSchema().optional(),
      active: primitives.getBooleanSchema().optional(),
      _active: createElementSchema().optional(),
      link: z.array(createPersonLinkSchema()).optional(),
    });

    return baseSchema;
  });
}
