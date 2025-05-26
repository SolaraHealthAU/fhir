import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.Medication> = z.object({
    resourceType: z.literal("Medication"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.lazy(() => createReferenceSchema()).optional(),
    form: z.lazy(() => createCodeableConceptSchema()).optional(),
    amount: z.lazy(() => createRatioSchema()).optional(),
    ingredient: z
      .array(z.lazy(() => createMedicationIngredientSchema()))
      .optional(),
    batch: z.lazy(() => createMedicationBatchSchema()).optional(),
  });

  return baseSchema;
}
