import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestSubstitutionSchema() {
  const baseSchema: z.ZodType<types.MedicationRequestSubstitution> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    allowedBoolean: z.boolean().optional(),
    _allowedBoolean: z.lazy(() => createElementSchema()).optional(),
    allowedCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    reason: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
