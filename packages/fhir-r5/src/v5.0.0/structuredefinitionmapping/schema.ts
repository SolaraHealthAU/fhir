import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionMappingSchema() {
  const baseSchema: z.ZodType<types.StructureDefinitionMapping> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identity: primitives.createIdSchema().optional(),
    _identity: z.lazy(() => createElementSchema()).optional(),
    uri: primitives.createUriSchema().optional(),
    _uri: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
