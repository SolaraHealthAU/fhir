import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialFractionDescriptionSchema() {
  const baseSchema: z.ZodType<types.SubstanceSourceMaterialFractionDescription> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      fraction: primitives.createStringSchema().optional(),
      _fraction: z.lazy(() => createElementSchema()).optional(),
      materialType: z.lazy(() => createCodeableConceptSchema()).optional(),
    });

  return baseSchema;
}
