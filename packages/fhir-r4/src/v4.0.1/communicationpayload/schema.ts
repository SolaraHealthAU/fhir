import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCommunicationPayloadSchema() {
  const baseSchema: z.ZodType<types.CommunicationPayload> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    contentString: z.string().optional(),
    _contentString: z.lazy(() => createElementSchema()).optional(),
    contentAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    contentReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
