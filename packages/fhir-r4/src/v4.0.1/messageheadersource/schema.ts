import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createContactPointSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderSourceSchema() {
  return getCachedSchema("MessageHeaderSource", () => {
    const baseSchema: z.ZodType<types.MessageHeaderSource> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      software: primitives.getStringSchema().optional(),
      _software: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      contact: createContactPointSchema().optional(),
      endpoint: primitives.getUrlSchema(),
      _endpoint: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
