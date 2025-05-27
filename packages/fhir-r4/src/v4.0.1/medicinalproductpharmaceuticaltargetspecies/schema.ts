import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicinalProductPharmaceuticalWithdrawalPeriodSchema } from "../medicinalproductpharmaceuticalwithdrawalperiod/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalTargetSpeciesSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalTargetSpecies> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      withdrawalPeriod: z
        .array(
          z.lazy(() =>
            createMedicinalProductPharmaceuticalWithdrawalPeriodSchema(),
          ),
        )
        .optional(),
    });

  return baseSchema;
}
