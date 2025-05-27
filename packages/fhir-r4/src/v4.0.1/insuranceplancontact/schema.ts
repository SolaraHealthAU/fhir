import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanContactSchema() {
  return getCachedSchema("InsurancePlanContact", () => {
    const baseSchema: z.ZodType<types.InsurancePlanContact> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      purpose: createCodeableConceptSchema().optional(),
      name: createHumanNameSchema().optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      address: createAddressSchema().optional(),
    });

    return baseSchema;
  });
}
