import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.SubstanceSpecificationStructure> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      stereochemistry: z.lazy(() => createCodeableConceptSchema()).optional(),
      opticalActivity: z.lazy(() => createCodeableConceptSchema()).optional(),
      molecularFormula: primitives.createStringSchema().optional(),
      _molecularFormula: z.lazy(() => createElementSchema()).optional(),
      molecularFormulaByMoiety: primitives.createStringSchema().optional(),
      _molecularFormulaByMoiety: z.lazy(() => createElementSchema()).optional(),
      isotope: z
        .array(z.lazy(() => createSubstanceSpecificationIsotopeSchema()))
        .optional(),
      molecularWeight: z
        .lazy(() => createSubstanceSpecificationMolecularWeightSchema())
        .optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
      representation: z
        .array(z.lazy(() => createSubstanceSpecificationRepresentationSchema()))
        .optional(),
    },
  );

  return baseSchema;
}
