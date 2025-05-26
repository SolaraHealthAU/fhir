import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createCoverageExceptionSchema } from "../coverageexception/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageCostToBeneficiarySchema() {
  const baseSchema: z.ZodType<types.CoverageCostToBeneficiary> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueMoney: z.lazy(() => createMoneySchema()).optional(),
    exception: z
      .array(z.lazy(() => createCoverageExceptionSchema()))
      .optional(),
  });

  return baseSchema;
}
