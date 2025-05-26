import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInsurancePlanBenefit1Schema } from "../insuranceplanbenefit1/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanSpecificCostSchema() {
  const baseSchema: z.ZodType<types.InsurancePlanSpecificCost> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()),
    benefit: z
      .array(z.lazy(() => createInsurancePlanBenefit1Schema()))
      .optional(),
  });

  return baseSchema;
}
