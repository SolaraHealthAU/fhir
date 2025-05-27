import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerStartingMaterialSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerStartingMaterial> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()).optional(),
      category: z.lazy(() => createCodeableConceptSchema()).optional(),
      isDefining: primitives.createBooleanSchema().optional(),
      _isDefining: z.lazy(() => createElementSchema()).optional(),
      amount: z.lazy(() => createQuantitySchema()).optional(),
    });

  return baseSchema;
}
