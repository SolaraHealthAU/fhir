import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitFinancialSchema() {
  return getCachedSchema("ExplanationOfBenefitFinancial", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitFinancial> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema(),
        allowedUnsignedInt: z.number().optional(),
        _allowedUnsignedInt: createElementSchema().optional(),
        allowedString: z.string().optional(),
        _allowedString: createElementSchema().optional(),
        allowedMoney: createMoneySchema().optional(),
        usedUnsignedInt: z.number().optional(),
        _usedUnsignedInt: createElementSchema().optional(),
        usedMoney: createMoneySchema().optional(),
      });

    return baseSchema;
  });
}
