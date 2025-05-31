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

export function createCoverageEligibilityRequestInsuranceSchema() {
  return getCachedSchema("CoverageEligibilityRequestInsurance", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestInsurance> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        focal: primitives.getBooleanSchema().optional(),
        _focal: createElementSchema().optional(),
        coverage: createReferenceSchema(),
        businessArrangement: primitives.getStringSchema().optional(),
        _businessArrangement: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
