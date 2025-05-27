import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createAttachmentSchema } from "../core/schema";
import { createDocumentReferenceProfileSchema } from "../documentreferenceprofile/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceContentSchema() {
  const baseSchema: z.ZodType<types.DocumentReferenceContent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    attachment: z.lazy(() => createAttachmentSchema()),
    profile: z
      .array(z.lazy(() => createDocumentReferenceProfileSchema()))
      .optional(),
  });

  return baseSchema;
}
