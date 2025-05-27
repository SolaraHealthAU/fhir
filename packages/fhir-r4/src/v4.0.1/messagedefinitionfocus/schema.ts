import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageDefinitionFocusSchema() {
  const baseSchema: z.ZodType<types.MessageDefinitionFocus> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
    min: primitives.createUnsignedIntSchema(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
