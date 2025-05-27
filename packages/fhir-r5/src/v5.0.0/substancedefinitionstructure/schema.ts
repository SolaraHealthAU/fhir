import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";
import { createSubstanceDefinitionMolecularWeightSchema } from "../substancedefinitionmolecularweight/schema";
import { createSubstanceDefinitionRepresentationSchema } from "../substancedefinitionrepresentation/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionStructureSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionStructure> = z.object({
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
    molecularWeight: z
      .lazy(() => createSubstanceDefinitionMolecularWeightSchema())
      .optional(),
    technique: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    sourceDocument: z.array(z.lazy(() => createReferenceSchema())).optional(),
    representation: z
      .array(z.lazy(() => createSubstanceDefinitionRepresentationSchema()))
      .optional(),
  });

  return baseSchema;
}
