import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClinicalUseDefinitionOtherTherapySchema() {
  const baseSchema: z.ZodType<types.ClinicalUseDefinitionOtherTherapy> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      relationshipType: z.lazy(() => createCodeableConceptSchema()),
      treatment: z.lazy(() => createCodeableReferenceSchema()),
    });

  return baseSchema;
}
