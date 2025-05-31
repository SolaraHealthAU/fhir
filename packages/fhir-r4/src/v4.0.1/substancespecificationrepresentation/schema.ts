import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAttachmentSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationRepresentationSchema() {
  return getCachedSchema("SubstanceSpecificationRepresentation", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationRepresentation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        representation: primitives.getStringSchema().optional(),
        _representation: createElementSchema().optional(),
        attachment: createAttachmentSchema().optional(),
      });

    return baseSchema;
  });
}
