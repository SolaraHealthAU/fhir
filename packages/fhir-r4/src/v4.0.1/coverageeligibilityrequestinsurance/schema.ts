import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestInsuranceSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityRequestInsurance> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      focal: primitives.createBooleanSchema().optional(),
      _focal: z.lazy(() => createElementSchema()).optional(),
      coverage: z.lazy(() => createReferenceSchema()),
      businessArrangement: primitives.createStringSchema().optional(),
      _businessArrangement: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
