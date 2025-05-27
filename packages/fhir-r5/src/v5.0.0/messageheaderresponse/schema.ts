import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
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
    identifier: z.lazy(() => createIdentifierSchema()),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    details: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
