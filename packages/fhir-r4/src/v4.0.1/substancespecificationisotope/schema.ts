import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
} from "../core/schema";
import { createSubstanceSpecificationMolecularWeightSchema } from "../substancespecificationmolecularweight/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationIsotopeSchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecificationIsotope> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    name: z.lazy(() => createCodeableConceptSchema()).optional(),
    substitution: z.lazy(() => createCodeableConceptSchema()).optional(),
    halfLife: z.lazy(() => createQuantitySchema()).optional(),
    molecularWeight: z
      .lazy(() => createSubstanceSpecificationMolecularWeightSchema())
      .optional(),
  });

  return baseSchema;
}
