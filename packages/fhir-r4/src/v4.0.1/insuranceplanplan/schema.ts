import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createInsurancePlanGeneralCostSchema } from "../insuranceplangeneralcost/schema";
import { createInsurancePlanSpecificCostSchema } from "../insuranceplanspecificcost/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanPlanSchema() {
  return getCachedSchema("InsurancePlanPlan", () => {
    const baseSchema: z.ZodType<types.InsurancePlanPlan> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      coverageArea: z.array(createReferenceSchema()).optional(),
      network: z.array(createReferenceSchema()).optional(),
      generalCost: z.array(createInsurancePlanGeneralCostSchema()).optional(),
      specificCost: z.array(createInsurancePlanSpecificCostSchema()).optional(),
    });

    return baseSchema;
  });
}
