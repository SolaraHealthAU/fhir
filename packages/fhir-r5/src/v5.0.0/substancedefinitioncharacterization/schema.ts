import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionCharacterizationSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionCharacterization> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      technique: z.lazy(() => createCodeableConceptSchema()).optional(),
      form: z.lazy(() => createCodeableConceptSchema()).optional(),
      description: primitives.createMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      file: z.array(z.lazy(() => createAttachmentSchema())).optional(),
    });

  return baseSchema;
}
