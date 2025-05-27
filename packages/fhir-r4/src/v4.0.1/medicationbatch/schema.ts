import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationBatchSchema() {
  const baseSchema: z.ZodType<types.MedicationBatch> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    lotNumber: primitives.createStringSchema().optional(),
    _lotNumber: z.lazy(() => createElementSchema()).optional(),
    expirationDate: primitives.createDateTimeSchema().optional(),
    _expirationDate: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
