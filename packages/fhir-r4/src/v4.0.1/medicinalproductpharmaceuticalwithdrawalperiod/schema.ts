import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalWithdrawalPeriodSchema() {
  return getCachedSchema(
    "MedicinalProductPharmaceuticalWithdrawalPeriod",
    () => {
      const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalWithdrawalPeriod> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(createExtensionSchema()).optional(),
          modifierExtension: z.array(createExtensionSchema()).optional(),
          tissue: createCodeableConceptSchema(),
          value: createQuantitySchema(),
          supportingInformation: primitives.getStringSchema().optional(),
          _supportingInformation: createElementSchema().optional(),
        });

      return baseSchema;
    },
  );
}
