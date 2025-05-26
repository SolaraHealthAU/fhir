import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicinalProductInteractionInteractantSchema } from "../medicinalproductinteractioninteractant/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductInteractionSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductInteraction> = z.object({
    resourceType: z.literal("MedicinalProductInteraction"),
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
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    interactant: z
      .array(z.lazy(() => createMedicinalProductInteractionInteractantSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    effect: z.lazy(() => createCodeableConceptSchema()).optional(),
    incidence: z.lazy(() => createCodeableConceptSchema()).optional(),
    management: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
