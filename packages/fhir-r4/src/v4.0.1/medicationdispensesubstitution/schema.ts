import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationDispenseSubstitutionSchema() {
  const baseSchema: z.ZodType<types.MedicationDispenseSubstitution> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    wasSubstituted: primitives.createBooleanSchema(),
    _wasSubstituted: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    responsibleParty: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
