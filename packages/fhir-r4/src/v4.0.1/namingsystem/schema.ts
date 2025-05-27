import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createContactDetailSchema,
  createCodeableConceptSchema,
  createUsageContextSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createNamingSystemUniqueIdSchema } from "../namingsystemuniqueid/schema";

/* Generated from FHIR JSON Schema */

export function createNamingSystemSchema() {
  return getCachedSchema("NamingSystem", () => {
    const baseSchema: z.ZodType<types.NamingSystem> = z.strictObject({
      resourceType: z.literal("NamingSystem"),
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
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      kind: z.enum(["codesystem", "identifier", "root"]),
      _kind: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema(),
      _date: z.lazy(() => createElementSchema()).optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      responsible: primitives.getStringSchema().optional(),
      _responsible: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      usage: primitives.getStringSchema().optional(),
      _usage: z.lazy(() => createElementSchema()).optional(),
      uniqueId: z.array(createNamingSystemUniqueIdSchema()),
    });

    return baseSchema;
  });
}
