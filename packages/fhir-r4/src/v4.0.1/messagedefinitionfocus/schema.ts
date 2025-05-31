import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageDefinitionFocusSchema() {
  return getCachedSchema("MessageDefinitionFocus", () => {
    const baseSchema: z.ZodType<types.MessageDefinitionFocus> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      profile: primitives.getCanonicalSchema().optional(),
      min: primitives.getUnsignedIntSchema(),
      _min: createElementSchema().optional(),
      max: primitives.getStringSchema().optional(),
      _max: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
