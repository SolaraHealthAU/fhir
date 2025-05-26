import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanLimitSchema() {
  const baseSchema: z.ZodType<types.InsurancePlanLimit> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    value: z.lazy(() => createQuantitySchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
