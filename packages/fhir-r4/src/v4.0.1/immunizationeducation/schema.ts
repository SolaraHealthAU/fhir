import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationEducationSchema() {
  return getCachedSchema("ImmunizationEducation", () => {
    const baseSchema: z.ZodType<types.ImmunizationEducation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      documentType: primitives.getStringSchema().optional(),
      _documentType: createElementSchema().optional(),
      reference: primitives.getUriSchema().optional(),
      _reference: createElementSchema().optional(),
      publicationDate: primitives.getDateTimeSchema().optional(),
      _publicationDate: createElementSchema().optional(),
      presentationDate: primitives.getDateTimeSchema().optional(),
      _presentationDate: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
