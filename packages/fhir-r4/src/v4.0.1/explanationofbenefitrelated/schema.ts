import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitRelatedSchema() {
  return getCachedSchema("ExplanationOfBenefitRelated", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitRelated> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        claim: createReferenceSchema().optional(),
        relationship: createCodeableConceptSchema().optional(),
        reference: createIdentifierSchema().optional(),
      });

    return baseSchema;
  });
}
