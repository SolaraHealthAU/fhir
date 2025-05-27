import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSupportedMessageSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementSupportedMessage> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      mode: z.enum(["sender", "receiver"]).optional(),
      _mode: z.lazy(() => createElementSchema()).optional(),
      definition: primitives.createCanonicalSchema(),
    });

  return baseSchema;
}
