import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountBalanceSchema() {
  const baseSchema: z.ZodType<types.AccountBalance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    aggregate: z.lazy(() => createCodeableConceptSchema()).optional(),
    term: z.lazy(() => createCodeableConceptSchema()).optional(),
    estimate: primitives.createBooleanSchema().optional(),
    _estimate: z.lazy(() => createElementSchema()).optional(),
    amount: z.lazy(() => createMoneySchema()),
  });

  return baseSchema;
}
