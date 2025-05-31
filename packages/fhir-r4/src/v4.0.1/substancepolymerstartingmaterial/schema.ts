import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createSubstanceAmountSchema } from "../substanceamount/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerStartingMaterialSchema() {
  return getCachedSchema("SubstancePolymerStartingMaterial", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerStartingMaterial> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        material: createCodeableConceptSchema().optional(),
        type: createCodeableConceptSchema().optional(),
        isDefining: primitives.getBooleanSchema().optional(),
        _isDefining: createElementSchema().optional(),
        amount: createSubstanceAmountSchema().optional(),
      });

    return baseSchema;
  });
}
