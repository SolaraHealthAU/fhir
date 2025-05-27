import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createInsurancePlanBenefitSchema } from "../insuranceplanbenefit/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanCoverageSchema() {
  return getCachedSchema("InsurancePlanCoverage", () => {
    const baseSchema: z.ZodType<types.InsurancePlanCoverage> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema(),
      network: z.array(createReferenceSchema()).optional(),
      benefit: z.array(createInsurancePlanBenefitSchema()),
    });

    return baseSchema;
  });
}
