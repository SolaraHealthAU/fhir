import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalWithdrawalPeriodSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalWithdrawalPeriod> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      tissue: z.lazy(() => createCodeableConceptSchema()),
      value: z.lazy(() => createQuantitySchema()),
      supportingInformation: primitives.createStringSchema().optional(),
      _supportingInformation: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
