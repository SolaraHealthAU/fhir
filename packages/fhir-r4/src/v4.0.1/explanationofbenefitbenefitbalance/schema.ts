import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createExplanationOfBenefitFinancialSchema } from "../explanationofbenefitfinancial/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitBenefitBalanceSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitBenefitBalance> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      category: z.lazy(() => createCodeableConceptSchema()),
      excluded: primitives.createBooleanSchema().optional(),
      _excluded: z.lazy(() => createElementSchema()).optional(),
      name: primitives.createStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      network: z.lazy(() => createCodeableConceptSchema()).optional(),
      unit: z.lazy(() => createCodeableConceptSchema()).optional(),
      term: z.lazy(() => createCodeableConceptSchema()).optional(),
      financial: z
        .array(z.lazy(() => createExplanationOfBenefitFinancialSchema()))
        .optional(),
    });

  return baseSchema;
}
