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
      name: z.array(createHumanNameSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      gender: z.enum(["male", "female", "other", "unknown"]).optional(),
      _gender: z.lazy(() => createElementSchema()).optional(),
      birthDate: primitives.getDateSchema().optional(),
      _birthDate: z.lazy(() => createElementSchema()).optional(),
      address: z.array(createAddressSchema()).optional(),
      photo: createAttachmentSchema().optional(),
      managingOrganization: createReferenceSchema().optional(),
      active: primitives.getBooleanSchema().optional(),
      _active: z.lazy(() => createElementSchema()).optional(),
      link: z.array(createPersonLinkSchema()).optional(),
    });

    return baseSchema;
  });
}
