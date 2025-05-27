import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstancePolymerStartingMaterialSchema } from "../substancepolymerstartingmaterial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstancePolymerMonomerSetSchema() {
  const baseSchema: z.ZodType<types.SubstancePolymerMonomerSet> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    ratioType: z.lazy(() => createCodeableConceptSchema()).optional(),
    startingMaterial: z
      .array(z.lazy(() => createSubstancePolymerStartingMaterialSchema()))
      .optional(),
  });

  return baseSchema;
}
