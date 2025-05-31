import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSubDetail1Schema() {
  return getCachedSchema("ExplanationOfBenefitSubDetail1", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitSubDetail1> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        productOrService: createCodeableConceptSchema(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        unitPrice: createMoneySchema().optional(),
        factor: primitives.getDecimalSchema().optional(),
        _factor: createElementSchema().optional(),
        net: createMoneySchema().optional(),
        noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
        _noteNumber: z.array(createElementSchema()).optional(),
        adjudication: z
          .array(createExplanationOfBenefitAdjudicationSchema())
          .optional(),
      });

    return baseSchema;
  });
}
