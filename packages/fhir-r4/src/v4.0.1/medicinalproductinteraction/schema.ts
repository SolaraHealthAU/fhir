import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicinalProductInteraction", () => {
    const baseSchema: z.ZodType<types.MedicinalProductInteraction> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductInteraction"),
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
        subject: z.array(createReferenceSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        interactant: z
          .array(createMedicinalProductInteractionInteractantSchema())
          .optional(),
        type: createCodeableConceptSchema().optional(),
        effect: createCodeableConceptSchema().optional(),
        incidence: createCodeableConceptSchema().optional(),
        management: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
