import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createDurationSchema,
  createPeriodSchema,
  createElementSchema,
  createQuantitySchema,
  createReferenceSchema,
  createAnnotationSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicationRequestInitialFillSchema } from "../medicationrequestinitialfill/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestDispenseRequestSchema() {
  const baseSchema: z.ZodType<types.MedicationRequestDispenseRequest> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      initialFill: z
        .lazy(() => createMedicationRequestInitialFillSchema())
        .optional(),
      dispenseInterval: z.lazy(() => createDurationSchema()).optional(),
      validityPeriod: z.lazy(() => createPeriodSchema()).optional(),
      numberOfRepeatsAllowed: primitives.createUnsignedIntSchema().optional(),
      _numberOfRepeatsAllowed: z.lazy(() => createElementSchema()).optional(),
      quantity: z.lazy(() => createQuantitySchema()).optional(),
      expectedSupplyDuration: z.lazy(() => createDurationSchema()).optional(),
      dispenser: z.lazy(() => createReferenceSchema()).optional(),
      dispenserInstruction: z
        .array(z.lazy(() => createAnnotationSchema()))
        .optional(),
      doseAdministrationAid: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
    });

  return baseSchema;
}
