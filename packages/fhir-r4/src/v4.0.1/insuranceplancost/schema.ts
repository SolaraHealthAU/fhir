import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanCostSchema() {
  const baseSchema: z.ZodType<types.InsurancePlanCost> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    applicability: z.lazy(() => createCodeableConceptSchema()).optional(),
    qualifiers: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    value: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
