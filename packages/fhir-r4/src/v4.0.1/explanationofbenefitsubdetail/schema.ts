import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
  createReferenceSchema,
} from "../core/schema";
import { createExplanationOfBenefitAdjudicationSchema } from "../explanationofbenefitadjudication/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitSubDetailSchema() {
  return getCachedSchema("ExplanationOfBenefitSubDetail", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitSubDetail> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        sequence: primitives.getPositiveIntSchema().optional(),
        _sequence: z.lazy(() => createElementSchema()).optional(),
        revenue: createCodeableConceptSchema().optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        programCode: z.array(createCodeableConceptSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        unitPrice: createMoneySchema().optional(),
        factor: primitives.getDecimalSchema().optional(),
        _factor: z.lazy(() => createElementSchema()).optional(),
        net: createMoneySchema().optional(),
        udi: z.array(createReferenceSchema()).optional(),
        noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
        _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
        adjudication: z
          .array(createExplanationOfBenefitAdjudicationSchema())
          .optional(),
      });

    return baseSchema;
  });
}
