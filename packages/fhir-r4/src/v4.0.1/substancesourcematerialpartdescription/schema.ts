import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialPartDescriptionSchema() {
  return getCachedSchema("SubstanceSourceMaterialPartDescription", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialPartDescription> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        part: createCodeableConceptSchema().optional(),
        partLocation: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
