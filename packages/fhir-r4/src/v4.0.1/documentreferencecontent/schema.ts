import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createAttachmentSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceContentSchema() {
  const baseSchema: z.ZodType<types.DocumentReferenceContent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    attachment: z.lazy(() => createAttachmentSchema()),
    format: z.lazy(() => createCodingSchema()).optional(),
  });

  return baseSchema;
}
