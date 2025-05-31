import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationDispenseSubstitutionSchema() {
  return getCachedSchema("MedicationDispenseSubstitution", () => {
    const baseSchema: z.ZodType<types.MedicationDispenseSubstitution> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        wasSubstituted: primitives.getBooleanSchema(),
        _wasSubstituted: createElementSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        reason: z.array(createCodeableConceptSchema()).optional(),
        responsibleParty: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
