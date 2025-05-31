import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPharmaceuticalCharacteristicsSchema() {
  return getCachedSchema(
    "MedicinalProductPharmaceuticalCharacteristics",
    () => {
      const baseSchema: z.ZodType<types.MedicinalProductPharmaceuticalCharacteristics> =
        z.strictObject({
          id: primitives.getStringSchema().optional(),
          extension: z.array(createExtensionSchema()).optional(),
          modifierExtension: z.array(createExtensionSchema()).optional(),
          code: createCodeableConceptSchema(),
          status: createCodeableConceptSchema().optional(),
        });

      return baseSchema;
    },
  );
}
