import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanGeneralCostSchema() {
  return getCachedSchema("InsurancePlanGeneralCost", () => {
    const baseSchema: z.ZodType<types.InsurancePlanGeneralCost> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        groupSize: primitives.getPositiveIntSchema().optional(),
        _groupSize: createElementSchema().optional(),
        cost: createMoneySchema().optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
