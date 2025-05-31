import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationBatchSchema() {
  return getCachedSchema("MedicationBatch", () => {
    const baseSchema: z.ZodType<types.MedicationBatch> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      lotNumber: primitives.getStringSchema().optional(),
      _lotNumber: createElementSchema().optional(),
      expirationDate: primitives.getDateTimeSchema().optional(),
      _expirationDate: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
