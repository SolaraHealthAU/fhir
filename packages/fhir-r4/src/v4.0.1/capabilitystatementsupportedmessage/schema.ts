import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSupportedMessageSchema() {
  return getCachedSchema("CapabilityStatementSupportedMessage", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementSupportedMessage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        mode: z.enum(["sender", "receiver"]).optional(),
        _mode: createElementSchema().optional(),
        definition: primitives.getCanonicalSchema(),
      });

    return baseSchema;
  });
}
