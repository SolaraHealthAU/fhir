import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createCoverageExceptionSchema } from "../coverageexception/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageCostToBeneficiarySchema() {
  return getCachedSchema("CoverageCostToBeneficiary", () => {
    const baseSchema: z.ZodType<types.CoverageCostToBeneficiary> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        valueQuantity: createQuantitySchema().optional(),
        valueMoney: createMoneySchema().optional(),
        exception: z.array(createCoverageExceptionSchema()).optional(),
      });

    return baseSchema;
  });
}
