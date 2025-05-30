import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitTotalSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitTotal> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()),
    amount: z.lazy(() => createMoneySchema()),
  });

  return baseSchema;
}
