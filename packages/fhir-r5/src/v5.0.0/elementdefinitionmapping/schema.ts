import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionMappingSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionMapping> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identity: primitives.createIdSchema(),
    _identity: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    map: primitives.createStringSchema(),
    _map: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createMarkdownSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
