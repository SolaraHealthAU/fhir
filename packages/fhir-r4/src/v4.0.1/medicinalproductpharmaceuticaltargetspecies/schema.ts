import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductPharmaceuticalWithdrawalPeriodSchema } from "../medicinalproductpharmaceuticalwithdrawalperiod/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalTargetSpeciesSchema() {
  return getCachedSchema("MedicinalProductPharmaceuticalTargetSpecies", () => {
    const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalTargetSpecies> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema(),
        withdrawalPeriod: z
          .array(createMedicinalProductPharmaceuticalWithdrawalPeriodSchema())
          .optional(),
      });

    return baseSchema;
  });
}
