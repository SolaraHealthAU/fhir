import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createInsurancePlanLimitSchema } from "../insuranceplanlimit/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanBenefitSchema() {
  const baseSchema: z.ZodType<types.InsurancePlanBenefit> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    requirement: primitives.createStringSchema().optional(),
    _requirement: z.lazy(() => createElementSchema()).optional(),
    limit: z.array(z.lazy(() => createInsurancePlanLimitSchema())).optional(),
  });

  return baseSchema;
}
