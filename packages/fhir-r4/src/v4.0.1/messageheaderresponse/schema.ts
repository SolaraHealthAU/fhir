import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderResponseSchema() {
  return getCachedSchema("MessageHeaderResponse", () => {
    const baseSchema: z.ZodType<types.MessageHeaderResponse> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: primitives.getIdSchema(),
      _identifier: createElementSchema().optional(),
      code: z.enum(["ok", "transient-error", "fatal-error"]),
      _code: createElementSchema().optional(),
      details: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
