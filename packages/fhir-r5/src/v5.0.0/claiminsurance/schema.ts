import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimInsuranceSchema() {
  const baseSchema: z.ZodType<types.ClaimInsurance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    focal: primitives.createBooleanSchema().optional(),
    _focal: z.lazy(() => createElementSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    coverage: z.lazy(() => createReferenceSchema()),
    businessArrangement: primitives.createStringSchema().optional(),
    _businessArrangement: z.lazy(() => createElementSchema()).optional(),
    preAuthRef: z.array(primitives.createStringSchema()).optional(),
    _preAuthRef: z.array(z.lazy(() => createElementSchema())).optional(),
    claimResponse: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
