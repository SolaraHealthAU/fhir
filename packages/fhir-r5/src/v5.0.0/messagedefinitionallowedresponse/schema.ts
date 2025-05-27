import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageDefinitionAllowedResponseSchema() {
  const baseSchema: z.ZodType<types.MessageDefinitionAllowedResponse> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      message: primitives.createCanonicalSchema(),
      situation: primitives.createMarkdownSchema().optional(),
      _situation: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
