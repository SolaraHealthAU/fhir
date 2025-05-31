import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createAddressSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitAccidentSchema() {
  return getCachedSchema("ExplanationOfBenefitAccident", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitAccident> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        date: primitives.getDateSchema().optional(),
        _date: createElementSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        locationAddress: createAddressSchema().optional(),
        locationReference: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
