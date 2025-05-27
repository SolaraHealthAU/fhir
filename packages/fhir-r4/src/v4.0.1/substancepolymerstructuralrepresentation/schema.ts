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

export function createSubstancePolymerStructuralRepresentationSchema() {
  return getCachedSchema("SubstancePolymerStructuralRepresentation", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerStructuralRepresentation> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        representation: primitives.getStringSchema().optional(),
        _representation: z.lazy(() => createElementSchema()).optional(),
        attachment: createAttachmentSchema().optional(),
      });

    return baseSchema;
  });
}
