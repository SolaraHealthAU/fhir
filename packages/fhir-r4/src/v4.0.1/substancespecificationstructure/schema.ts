import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createSubstanceSpecificationIsotopeSchema } from "../substancespecificationisotope/schema";
import { createSubstanceSpecificationMolecularWeightSchema } from "../substancespecificationmolecularweight/schema";
import { createSubstanceSpecificationRepresentationSchema } from "../substancespecificationrepresentation/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationStructureSchema() {
  return getCachedSchema("SubstanceSpecificationStructure", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationStructure> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        stereochemistry: createCodeableConceptSchema().optional(),
        opticalActivity: createCodeableConceptSchema().optional(),
        molecularFormula: primitives.getStringSchema().optional(),
        _molecularFormula: z.lazy(() => createElementSchema()).optional(),
        molecularFormulaByMoiety: primitives.getStringSchema().optional(),
        _molecularFormulaByMoiety: z
          .lazy(() => createElementSchema())
          .optional(),
        isotope: z
          .array(createSubstanceSpecificationIsotopeSchema())
          .optional(),
        molecularWeight:
          createSubstanceSpecificationMolecularWeightSchema().optional(),
        source: z.array(createReferenceSchema()).optional(),
        representation: z
          .array(createSubstanceSpecificationRepresentationSchema())
          .optional(),
      });

    return baseSchema;
  });
}
