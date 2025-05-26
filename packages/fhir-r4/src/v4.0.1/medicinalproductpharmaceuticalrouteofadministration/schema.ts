import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createRatioSchema,
  createDurationSchema,
} from "../core/schema";
import { createMedicinalProductPharmaceuticalTargetSpeciesSchema } from "../medicinalproductpharmaceuticaltargetspecies/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalRouteOfAdministrationSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalRouteOfAdministration> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      firstDose: z.lazy(() => createQuantitySchema()).optional(),
      maxSingleDose: z.lazy(() => createQuantitySchema()).optional(),
      maxDosePerDay: z.lazy(() => createQuantitySchema()).optional(),
      maxDosePerTreatmentPeriod: z.lazy(() => createRatioSchema()).optional(),
      maxTreatmentPeriod: z.lazy(() => createDurationSchema()).optional(),
      targetSpecies: z
        .array(
          z.lazy(() =>
            createMedicinalProductPharmaceuticalTargetSpeciesSchema(),
          ),
        )
        .optional(),
    });

  return baseSchema;
}
