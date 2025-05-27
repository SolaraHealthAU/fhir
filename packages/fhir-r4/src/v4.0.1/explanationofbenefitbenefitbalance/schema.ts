import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createExplanationOfBenefitFinancialSchema } from "../explanationofbenefitfinancial/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitBenefitBalanceSchema() {
  return getCachedSchema("ExplanationOfBenefitBenefitBalance", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitBenefitBalance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        category: createCodeableConceptSchema(),
        excluded: primitives.getBooleanSchema().optional(),
        _excluded: z.lazy(() => createElementSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        network: createCodeableConceptSchema().optional(),
        unit: createCodeableConceptSchema().optional(),
        term: createCodeableConceptSchema().optional(),
        financial: z
          .array(createExplanationOfBenefitFinancialSchema())
          .optional(),
      });

    return baseSchema;
  });
}
