import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitTotalSchema() {
  return getCachedSchema("ExplanationOfBenefitTotal", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitTotal> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        category: createCodeableConceptSchema(),
        amount: createMoneySchema(),
      });

    return baseSchema;
  });
}
