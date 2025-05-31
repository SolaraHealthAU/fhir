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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      status: primitives.getCodeSchema().optional(),
      _status: createElementSchema().optional(),
      manufacturer: createReferenceSchema().optional(),
      form: createCodeableConceptSchema().optional(),
      amount: createRatioSchema().optional(),
      ingredient: z.array(createMedicationIngredientSchema()).optional(),
      batch: createMedicationBatchSchema().optional(),
    });

    return baseSchema;
  });
}
