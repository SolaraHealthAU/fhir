import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialAuthorSchema() {
  return getCachedSchema("SubstanceSourceMaterialAuthor", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialAuthor> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        authorType: createCodeableConceptSchema().optional(),
        authorDescription: primitives.getStringSchema().optional(),
        _authorDescription: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
