import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInsurancePlanCostSchema } from "../insuranceplancost/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanBenefit1Schema() {
  const baseSchema: z.ZodType<types.InsurancePlanBenefit1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    cost: z.array(z.lazy(() => createInsurancePlanCostSchema())).optional(),
  });

  return baseSchema;
}
