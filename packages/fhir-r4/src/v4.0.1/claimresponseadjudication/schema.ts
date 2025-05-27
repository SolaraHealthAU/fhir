import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseAdjudicationSchema() {
  return getCachedSchema("ClaimResponseAdjudication", () => {
    const baseSchema: z.ZodType<types.ClaimResponseAdjudication> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        category: createCodeableConceptSchema(),
        reason: createCodeableConceptSchema().optional(),
        amount: createMoneySchema().optional(),
        value: primitives.getDecimalSchema().optional(),
        _value: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
