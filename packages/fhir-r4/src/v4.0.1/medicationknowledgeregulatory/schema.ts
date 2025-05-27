import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createReferenceSchema } from "../core/schema";
import { createMedicationKnowledgeSubstitutionSchema } from "../medicationknowledgesubstitution/schema";
import { createMedicationKnowledgeScheduleSchema } from "../medicationknowledgeschedule/schema";
import { createMedicationKnowledgeMaxDispenseSchema } from "../medicationknowledgemaxdispense/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeRegulatorySchema() {
  return getCachedSchema("MedicationKnowledgeRegulatory", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeRegulatory> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        regulatoryAuthority: createReferenceSchema(),
        substitution: z
          .array(createMedicationKnowledgeSubstitutionSchema())
          .optional(),
        schedule: z.array(createMedicationKnowledgeScheduleSchema()).optional(),
        maxDispense: createMedicationKnowledgeMaxDispenseSchema().optional(),
      });

    return baseSchema;
  });
}
