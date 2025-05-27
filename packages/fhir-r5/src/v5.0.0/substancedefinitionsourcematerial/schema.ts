import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionSourceMaterialSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionSourceMaterial> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      genus: z.lazy(() => createCodeableConceptSchema()).optional(),
      species: z.lazy(() => createCodeableConceptSchema()).optional(),
      part: z.lazy(() => createCodeableConceptSchema()).optional(),
      countryOfOrigin: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
    });

  return baseSchema;
}
