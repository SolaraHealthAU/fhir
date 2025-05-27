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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: primitives.getIdSchema(),
      _identifier: z.lazy(() => createElementSchema()).optional(),
      code: z.enum(["ok", "transient-error", "fatal-error"]),
      _code: z.lazy(() => createElementSchema()).optional(),
      details: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
