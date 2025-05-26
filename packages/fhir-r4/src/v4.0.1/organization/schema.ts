import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Organization> = z.object({
    resourceType: z.literal("Organization"),
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
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    alias: z.array(primitives.createStringSchema()).optional(),
    _alias: z.array(z.lazy(() => createElementSchema())).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    address: z.array(z.lazy(() => createAddressSchema())).optional(),
    partOf: z.lazy(() => createReferenceSchema()).optional(),
    contact: z
      .array(z.lazy(() => createOrganizationContactSchema()))
      .optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
