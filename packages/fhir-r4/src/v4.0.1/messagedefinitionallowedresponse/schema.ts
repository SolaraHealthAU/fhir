import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageDefinitionAllowedResponseSchema() {
  return getCachedSchema("MessageDefinitionAllowedResponse", () => {
    const baseSchema: z.ZodType<types.MessageDefinitionAllowedResponse> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        message: primitives.getCanonicalSchema(),
        situation: primitives.getMarkdownSchema().optional(),
        _situation: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
