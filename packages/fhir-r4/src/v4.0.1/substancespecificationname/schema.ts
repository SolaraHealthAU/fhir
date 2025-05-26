import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createSubstanceSpecificationOfficialSchema } from "../substancespecificationofficial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationNameSchema() {
  const baseSchema: z.ZodType<types.SubstanceSpecificationName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    preferred: primitives.createBooleanSchema().optional(),
    _preferred: z.lazy(() => createElementSchema()).optional(),
    language: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    domain: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    synonym: z
      .array(z.lazy(() => createSubstanceSpecificationNameSchema()))
      .optional(),
    translation: z
      .array(z.lazy(() => createSubstanceSpecificationNameSchema()))
      .optional(),
    official: z
      .array(z.lazy(() => createSubstanceSpecificationOfficialSchema()))
      .optional(),
    source: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
