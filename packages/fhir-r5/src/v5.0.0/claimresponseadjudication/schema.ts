import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseAdjudicationSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseAdjudication> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()),
    reason: z.lazy(() => createCodeableConceptSchema()).optional(),
    amount: z.lazy(() => createMoneySchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
