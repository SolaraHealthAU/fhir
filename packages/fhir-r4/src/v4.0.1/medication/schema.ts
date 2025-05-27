import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createRatioSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationIngredientSchema } from "../medicationingredient/schema";
import { createMedicationBatchSchema } from "../medicationbatch/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationSchema() {
  return getCachedSchema("Medication", () => {
    const baseSchema: z.ZodType<types.Medication> = z.strictObject({
      resourceType: z.literal("Medication"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      code: createCodeableConceptSchema().optional(),
      status: primitives.getCodeSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      manufacturer: createReferenceSchema().optional(),
      form: createCodeableConceptSchema().optional(),
      amount: createRatioSchema().optional(),
      ingredient: z.array(createMedicationIngredientSchema()).optional(),
      batch: createMedicationBatchSchema().optional(),
    });

    return baseSchema;
  });
}
