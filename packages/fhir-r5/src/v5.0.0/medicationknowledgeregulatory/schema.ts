import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createMedicationKnowledgeSubstitutionSchema } from "../medicationknowledgesubstitution/schema";
import { createMedicationKnowledgeMaxDispenseSchema } from "../medicationknowledgemaxdispense/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeRegulatorySchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeRegulatory> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    regulatoryAuthority: z.lazy(() => createReferenceSchema()),
    substitution: z
      .array(z.lazy(() => createMedicationKnowledgeSubstitutionSchema()))
      .optional(),
    schedule: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    maxDispense: z
      .lazy(() => createMedicationKnowledgeMaxDispenseSchema())
      .optional(),
  });

  return baseSchema;
}
