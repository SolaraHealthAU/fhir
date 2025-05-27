import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createContactDetailSchema,
  createUsageContextSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createCompartmentDefinitionResourceSchema } from "../compartmentdefinitionresource/schema";

/* Generated from FHIR JSON Schema */

export function createCompartmentDefinitionSchema() {
  const baseSchema: z.ZodType<types.CompartmentDefinition> = z.object({
    resourceType: z.literal("CompartmentDefinition"),
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
    url: primitives.createUriSchema(),
    _url: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    status: z.enum(["draft", "active", "retired", "unknown"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    code: z.enum([
      "Patient",
      "Encounter",
      "RelatedPerson",
      "Practitioner",
      "Device",
    ]),
    _code: z.lazy(() => createElementSchema()).optional(),
    search: primitives.createBooleanSchema(),
    _search: z.lazy(() => createElementSchema()).optional(),
    resource: z
      .array(z.lazy(() => createCompartmentDefinitionResourceSchema()))
      .optional(),
  });

  return baseSchema;
}
