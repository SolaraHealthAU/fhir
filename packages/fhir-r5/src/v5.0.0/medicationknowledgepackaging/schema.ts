import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createReferenceSchema } from "../core/schema";
import { createMedicationKnowledgeCostSchema } from "../medicationknowledgecost/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgePackagingSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgePackaging> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    cost: z
      .array(z.lazy(() => createMedicationKnowledgeCostSchema()))
      .optional(),
    packagedProduct: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
