import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createDurationSchema,
  createPeriodSchema,
  createElementSchema,
  createQuantitySchema,
  createReferenceSchema,
} from "../core/schema";
import { createMedicationRequestInitialFillSchema } from "../medicationrequestinitialfill/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestDispenseRequestSchema() {
  return getCachedSchema("MedicationRequestDispenseRequest", () => {
    const baseSchema: z.ZodType<types.MedicationRequestDispenseRequest> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        initialFill: createMedicationRequestInitialFillSchema().optional(),
        dispenseInterval: createDurationSchema().optional(),
        validityPeriod: createPeriodSchema().optional(),
        numberOfRepeatsAllowed: primitives.getUnsignedIntSchema().optional(),
        _numberOfRepeatsAllowed: z.lazy(() => createElementSchema()).optional(),
        quantity: createQuantitySchema().optional(),
        expectedSupplyDuration: createDurationSchema().optional(),
        performer: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
