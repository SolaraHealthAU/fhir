import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("CompartmentDefinition", () => {
    const baseSchema: z.ZodType<types.CompartmentDefinition> = z.strictObject({
      resourceType: z.literal("CompartmentDefinition"),
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
      url: primitives.getUriSchema(),
      _url: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      name: primitives.getStringSchema(),
      _name: createElementSchema().optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      purpose: primitives.getMarkdownSchema().optional(),
      _purpose: createElementSchema().optional(),
      code: z.enum([
        "Patient",
        "Encounter",
        "RelatedPerson",
        "Practitioner",
        "Device",
      ]),
      _code: createElementSchema().optional(),
      search: primitives.getBooleanSchema(),
      _search: createElementSchema().optional(),
      resource: z.array(createCompartmentDefinitionResourceSchema()).optional(),
    });

    return baseSchema;
  });
}
