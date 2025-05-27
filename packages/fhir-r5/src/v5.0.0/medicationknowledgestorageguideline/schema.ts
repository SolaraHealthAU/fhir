import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createDurationSchema,
} from "../core/schema";
import { createMedicationKnowledgeEnvironmentalSettingSchema } from "../medicationknowledgeenvironmentalsetting/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeStorageGuidelineSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledgeStorageGuideline> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      reference: primitives.createUriSchema().optional(),
      _reference: z.lazy(() => createElementSchema()).optional(),
      note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
      stabilityDuration: z.lazy(() => createDurationSchema()).optional(),
      environmentalSetting: z
        .array(
          z.lazy(() => createMedicationKnowledgeEnvironmentalSettingSchema()),
        )
        .optional(),
    });

  return baseSchema;
}
