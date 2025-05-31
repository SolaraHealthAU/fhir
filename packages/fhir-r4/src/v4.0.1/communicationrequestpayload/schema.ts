import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationRequestPayloadSchema() {
  return getCachedSchema("CommunicationRequestPayload", () => {
    const baseSchema: z.ZodType<types.CommunicationRequestPayload> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        contentString: z.string().optional(),
        _contentString: createElementSchema().optional(),
        contentAttachment: createAttachmentSchema().optional(),
        contentReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
