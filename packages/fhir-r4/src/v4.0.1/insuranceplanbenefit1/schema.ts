import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInsurancePlanCostSchema } from "../insuranceplancost/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanBenefit1Schema() {
  return getCachedSchema("InsurancePlanBenefit1", () => {
    const baseSchema: z.ZodType<types.InsurancePlanBenefit1> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      cost: z.array(createInsurancePlanCostSchema()).optional(),
    });

    return baseSchema;
  });
}
