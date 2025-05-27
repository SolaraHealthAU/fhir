import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema(
    "MedicinalProductPharmaceuticalRouteOfAdministration",
    () => {
      const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalRouteOfAdministration> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
          modifierExtension: z
            .array(z.lazy(() => createExtensionSchema()))
            .optional(),
          code: createCodeableConceptSchema(),
          firstDose: createQuantitySchema().optional(),
          maxSingleDose: createQuantitySchema().optional(),
          maxDosePerDay: createQuantitySchema().optional(),
          maxDosePerTreatmentPeriod: createRatioSchema().optional(),
          maxTreatmentPeriod: createDurationSchema().optional(),
          targetSpecies: z
            .array(createMedicinalProductPharmaceuticalTargetSpeciesSchema())
            .optional(),
        });

      return baseSchema;
    },
  );
}
