import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCapabilityStatementEndpointSchema } from "../capabilitystatementendpoint/schema";
import { createCapabilityStatementSupportedMessageSchema } from "../capabilitystatementsupportedmessage/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementMessagingSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementMessaging> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    endpoint: z
      .array(z.lazy(() => createCapabilityStatementEndpointSchema()))
      .optional(),
    reliableCache: primitives.createUnsignedIntSchema().optional(),
    _reliableCache: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    supportedMessage: z
      .array(z.lazy(() => createCapabilityStatementSupportedMessageSchema()))
      .optional(),
  });

  return baseSchema;
}
