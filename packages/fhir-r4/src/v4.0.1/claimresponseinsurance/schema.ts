import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseInsuranceSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseInsurance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    focal: primitives.createBooleanSchema(),
    _focal: z.lazy(() => createElementSchema()).optional(),
    coverage: z.lazy(() => createReferenceSchema()),
    businessArrangement: primitives.createStringSchema().optional(),
    _businessArrangement: z.lazy(() => createElementSchema()).optional(),
    claimResponse: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
