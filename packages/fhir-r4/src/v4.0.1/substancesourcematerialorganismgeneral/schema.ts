import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSourceMaterialOrganismGeneralSchema() {
  return getCachedSchema("SubstanceSourceMaterialOrganismGeneral", () => {
    const baseSchema: z.ZodType<types.SubstanceSourceMaterialOrganismGeneral> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        kingdom: createCodeableConceptSchema().optional(),
        phylum: createCodeableConceptSchema().optional(),
        class: createCodeableConceptSchema().optional(),
        order: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
