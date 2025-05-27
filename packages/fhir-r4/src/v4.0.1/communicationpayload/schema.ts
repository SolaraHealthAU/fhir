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

export function createCommunicationPayloadSchema() {
  return getCachedSchema("CommunicationPayload", () => {
    const baseSchema: z.ZodType<types.CommunicationPayload> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      contentString: z.string().optional(),
      _contentString: z.lazy(() => createElementSchema()).optional(),
      contentAttachment: createAttachmentSchema().optional(),
      contentReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
