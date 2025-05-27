import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRatioSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationAdministrationDosageSchema() {
  const baseSchema: z.ZodType<types.MedicationAdministrationDosage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    site: z.lazy(() => createCodeableConceptSchema()).optional(),
    route: z.lazy(() => createCodeableConceptSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    dose: z.lazy(() => createQuantitySchema()).optional(),
    rateRatio: z.lazy(() => createRatioSchema()).optional(),
    rateQuantity: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}
