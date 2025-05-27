import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createInsurancePlanBenefitSchema } from "../insuranceplanbenefit/schema";

/* Generated from FHIR JSON Schema */

export function createInsurancePlanCoverageSchema() {
  const baseSchema: z.ZodType<types.InsurancePlanCoverage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    network: z.array(z.lazy(() => createReferenceSchema())).optional(),
    benefit: z.array(z.lazy(() => createInsurancePlanBenefitSchema())),
  });

  return baseSchema;
}
