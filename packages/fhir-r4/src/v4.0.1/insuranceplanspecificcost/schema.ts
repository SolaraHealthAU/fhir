import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createInsurancePlanBenefit1Schema } from "../insuranceplanbenefit1/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanSpecificCostSchema() {
  return getCachedSchema("InsurancePlanSpecificCost", () => {
    const baseSchema: z.ZodType<types.InsurancePlanSpecificCost> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        category: createCodeableConceptSchema(),
        benefit: z.array(createInsurancePlanBenefit1Schema()).optional(),
      });

    return baseSchema;
  });
}
