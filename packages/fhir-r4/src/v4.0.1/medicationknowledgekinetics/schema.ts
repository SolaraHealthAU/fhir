import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeKineticsSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeKinetics> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    areaUnderCurve: z.array(z.lazy(() => createQuantitySchema())).optional(),
    lethalDose50: z.array(z.lazy(() => createQuantitySchema())).optional(),
    halfLifePeriod: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
