import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";
import { createCoverageEligibilityResponseItemSchema } from "../coverageeligibilityresponseitem/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseInsuranceSchema() {
  return getCachedSchema("CoverageEligibilityResponseInsurance", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityResponseInsurance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        coverage: createReferenceSchema(),
        inforce: primitives.getBooleanSchema().optional(),
        _inforce: z.lazy(() => createElementSchema()).optional(),
        benefitPeriod: createPeriodSchema().optional(),
        item: z.array(createCoverageEligibilityResponseItemSchema()).optional(),
      });

    return baseSchema;
  });
}
