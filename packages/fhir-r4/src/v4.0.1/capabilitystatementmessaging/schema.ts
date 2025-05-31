import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementEndpointSchema } from "../capabilitystatementendpoint/schema";
import { createCapabilityStatementSupportedMessageSchema } from "../capabilitystatementsupportedmessage/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementMessagingSchema() {
  return getCachedSchema("CapabilityStatementMessaging", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementMessaging> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        endpoint: z.array(createCapabilityStatementEndpointSchema()).optional(),
        reliableCache: primitives.getUnsignedIntSchema().optional(),
        _reliableCache: createElementSchema().optional(),
        documentation: primitives.getMarkdownSchema().optional(),
        _documentation: createElementSchema().optional(),
        supportedMessage: z
          .array(createCapabilityStatementSupportedMessageSchema())
          .optional(),
      });

    return baseSchema;
  });
}
