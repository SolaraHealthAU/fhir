import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationRepresentationSchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecificationRepresentation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      representation: primitives.createStringSchema().optional(),
      _representation: z.lazy(() => createElementSchema()).optional(),
      attachment: z.lazy(() => createAttachmentSchema()).optional(),
    });

  return baseSchema;
}
