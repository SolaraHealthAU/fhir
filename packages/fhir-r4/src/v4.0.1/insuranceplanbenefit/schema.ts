import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createInsurancePlanLimitSchema } from "../insuranceplanlimit/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanBenefitSchema() {
  return getCachedSchema("InsurancePlanBenefit", () => {
    const baseSchema: z.ZodType<types.InsurancePlanBenefit> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema(),
      requirement: primitives.getStringSchema().optional(),
      _requirement: z.lazy(() => createElementSchema()).optional(),
      limit: z.array(createInsurancePlanLimitSchema()).optional(),
    });

    return baseSchema;
  });
}
