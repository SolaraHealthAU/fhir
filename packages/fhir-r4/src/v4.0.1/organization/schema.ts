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
  createContactPointSchema,
  createAddressSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createOrganizationContactSchema } from "../organizationcontact/schema";

/* Generated from FHIR JSON Schema */

export function createOrganizationSchema() {
  return getCachedSchema("Organization", () => {
    const baseSchema: z.ZodType<types.Organization> = z.strictObject({
      resourceType: z.literal("Organization"),
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
      active: primitives.getBooleanSchema().optional(),
      _active: createElementSchema().optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(createElementSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      address: z.array(createAddressSchema()).optional(),
      partOf: createReferenceSchema().optional(),
      contact: z.array(createOrganizationContactSchema()).optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
