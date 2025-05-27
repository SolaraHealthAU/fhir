import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstancePolymerStartingMaterialSchema } from "../substancepolymerstartingmaterial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerMonomerSetSchema() {
  return getCachedSchema("SubstancePolymerMonomerSet", () => {
    const baseSchema: z.ZodType<types.SubstancePolymerMonomerSet> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        ratioType: createCodeableConceptSchema().optional(),
        startingMaterial: z
          .array(createSubstancePolymerStartingMaterialSchema())
          .optional(),
      });

    return baseSchema;
  });
}
