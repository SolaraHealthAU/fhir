import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
  createCodeableReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createManufacturedItemDefinitionConstituentSchema() {
  const baseSchema: z.ZodType<types.ManufacturedItemDefinitionConstituent> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      amount: z.array(z.lazy(() => createQuantitySchema())).optional(),
      location: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      function: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      hasIngredient: z
        .array(z.lazy(() => createCodeableReferenceSchema()))
        .optional(),
    });

  return baseSchema;
}
