import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createSubstanceAmountSchema } from "../substanceamount/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerStartingMaterialSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerStartingMaterial> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      material: z.lazy(() => createCodeableConceptSchema()).optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      isDefining: primitives.createBooleanSchema().optional(),
      _isDefining: z.lazy(() => createElementSchema()).optional(),
      amount: z.lazy(() => createSubstanceAmountSchema()).optional(),
    });

  return baseSchema;
}
