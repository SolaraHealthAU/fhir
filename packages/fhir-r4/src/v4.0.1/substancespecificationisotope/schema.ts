import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createSubstanceSpecificationMolecularWeightSchema } from "../substancespecificationmolecularweight/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationIsotopeSchema() {
  return getCachedSchema("SubstanceSpecificationIsotope", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationIsotope> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        identifier: createIdentifierSchema().optional(),
        name: createCodeableConceptSchema().optional(),
        substitution: createCodeableConceptSchema().optional(),
        halfLife: createQuantitySchema().optional(),
        molecularWeight:
          createSubstanceSpecificationMolecularWeightSchema().optional(),
      });

    return baseSchema;
  });
}
