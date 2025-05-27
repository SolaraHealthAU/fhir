import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseInsuranceSchema() {
  return getCachedSchema("ClaimResponseInsurance", () => {
    const baseSchema: z.ZodType<types.ClaimResponseInsurance> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      sequence: primitives.getPositiveIntSchema(),
      _sequence: z.lazy(() => createElementSchema()).optional(),
      focal: primitives.getBooleanSchema(),
      _focal: z.lazy(() => createElementSchema()).optional(),
      coverage: createReferenceSchema(),
      businessArrangement: primitives.getStringSchema().optional(),
      _businessArrangement: z.lazy(() => createElementSchema()).optional(),
      claimResponse: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
