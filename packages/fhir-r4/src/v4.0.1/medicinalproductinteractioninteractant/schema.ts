import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductInteractionInteractantSchema() {
  return getCachedSchema("MedicinalProductInteractionInteractant", () => {
    const baseSchema: z.ZodType<types.MedicinalProductInteractionInteractant> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        itemReference: createReferenceSchema().optional(),
        itemCodeableConcept: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
