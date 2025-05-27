import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationRequestSubstitutionSchema() {
  return getCachedSchema("MedicationRequestSubstitution", () => {
    const baseSchema: z.ZodType<types.MedicationRequestSubstitution> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        allowedBoolean: z.boolean().optional(),
        _allowedBoolean: z.lazy(() => createElementSchema()).optional(),
        allowedCodeableConcept: createCodeableConceptSchema().optional(),
        reason: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
