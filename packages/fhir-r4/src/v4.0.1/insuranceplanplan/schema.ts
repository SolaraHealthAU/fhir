import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.InsurancePlanPlan> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    coverageArea: z.array(z.lazy(() => createReferenceSchema())).optional(),
    network: z.array(z.lazy(() => createReferenceSchema())).optional(),
    generalCost: z
      .array(z.lazy(() => createInsurancePlanGeneralCostSchema()))
      .optional(),
    specificCost: z
      .array(z.lazy(() => createInsurancePlanSpecificCostSchema()))
      .optional(),
  });

  return baseSchema;
}
