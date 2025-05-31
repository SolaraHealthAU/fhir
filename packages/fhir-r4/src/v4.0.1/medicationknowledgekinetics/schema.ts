import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeKineticsSchema() {
  return getCachedSchema("MedicationKnowledgeKinetics", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledgeKinetics> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        areaUnderCurve: z.array(createQuantitySchema()).optional(),
        lethalDose50: z.array(createQuantitySchema()).optional(),
        halfLifePeriod: createDurationSchema().optional(),
      });

    return baseSchema;
  });
}
