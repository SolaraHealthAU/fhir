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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      lotNumber: primitives.getStringSchema().optional(),
      _lotNumber: z.lazy(() => createElementSchema()).optional(),
      expirationDate: primitives.getDateTimeSchema().optional(),
      _expirationDate: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
