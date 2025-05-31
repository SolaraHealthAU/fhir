import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanCostSchema() {
  return getCachedSchema("InsurancePlanCost", () => {
    const baseSchema: z.ZodType<types.InsurancePlanCost> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      applicability: createCodeableConceptSchema().optional(),
      qualifiers: z.array(createCodeableConceptSchema()).optional(),
      value: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}
