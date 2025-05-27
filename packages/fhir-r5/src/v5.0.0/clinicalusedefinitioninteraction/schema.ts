import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createClinicalUseDefinitionInteractantSchema } from "../clinicalusedefinitioninteractant/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionInteractionSchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinitionInteraction> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      interactant: z
        .array(z.lazy(() => createClinicalUseDefinitionInteractantSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      effect: z.lazy(() => createCodeableReferenceSchema()).optional(),
      incidence: z.lazy(() => createCodeableConceptSchema()).optional(),
      management: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
    });

  return baseSchema;
}
