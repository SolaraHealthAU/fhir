import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanLimitSchema() {
  return getCachedSchema("InsurancePlanLimit", () => {
    const baseSchema: z.ZodType<types.InsurancePlanLimit> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      value: createQuantitySchema().optional(),
      code: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
