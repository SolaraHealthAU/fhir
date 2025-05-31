import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationClassificationSchema() {
  return getCachedSchema("SubstanceReferenceInformationClassification", () => {
    const baseSchema: z.ZodType<types.SubstanceReferenceInformationClassification> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        domain: createCodeableConceptSchema().optional(),
        classification: createCodeableConceptSchema().optional(),
        subtype: z.array(createCodeableConceptSchema()).optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
