import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponsePaymentSchema() {
  return getCachedSchema("ClaimResponsePayment", () => {
    const baseSchema: z.ZodType<types.ClaimResponsePayment> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      adjustment: createMoneySchema().optional(),
      adjustmentReason: createCodeableConceptSchema().optional(),
      date: primitives.getDateSchema().optional(),
      _date: createElementSchema().optional(),
      amount: createMoneySchema(),
      identifier: createIdentifierSchema().optional(),
    });

    return baseSchema;
  });
}
