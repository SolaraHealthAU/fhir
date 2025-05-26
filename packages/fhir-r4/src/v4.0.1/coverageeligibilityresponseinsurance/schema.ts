import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";
import { createCoverageEligibilityResponseItemSchema } from "../coverageeligibilityresponseitem/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseInsuranceSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityResponseInsurance> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      coverage: z.lazy(() => createReferenceSchema()),
      inforce: primitives.createBooleanSchema().optional(),
      _inforce: z.lazy(() => createElementSchema()).optional(),
      benefitPeriod: z.lazy(() => createPeriodSchema()).optional(),
      item: z
        .array(z.lazy(() => createCoverageEligibilityResponseItemSchema()))
        .optional(),
    });

  return baseSchema;
}
