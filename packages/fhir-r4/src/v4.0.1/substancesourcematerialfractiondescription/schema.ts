import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialFractionDescriptionSchema() {
  return getCachedSchema("SubstanceSourceMaterialFractionDescription", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialFractionDescription> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        fraction: primitives.getStringSchema().optional(),
        _fraction: createElementSchema().optional(),
        materialType: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
