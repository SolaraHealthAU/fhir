import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
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
    marketingAuthorizationHolder: z
      .lazy(() => createReferenceSchema())
      .optional(),
    doseForm: z.lazy(() => createCodeableConceptSchema()).optional(),
    totalVolume: z.lazy(() => createQuantitySchema()).optional(),
    ingredient: z
      .array(z.lazy(() => createMedicationIngredientSchema()))
      .optional(),
    batch: z.lazy(() => createMedicationBatchSchema()).optional(),
    definition: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
