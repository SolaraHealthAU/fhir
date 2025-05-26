import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderResponseSchema() {
  const baseSchema: z.ZodType<types.MessageHeaderResponse> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: primitives.createIdSchema(),
    _identifier: z.lazy(() => createElementSchema()).optional(),
    code: z.enum(["ok", "transient-error", "fatal-error"]),
    _code: z.lazy(() => createElementSchema()).optional(),
    details: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
