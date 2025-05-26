import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationGeneSchema() {
  const baseSchema: z.ZodType<types.SubstanceReferenceInformationGene> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      geneSequenceOrigin: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      gene: z.lazy(() => createCodeableConceptSchema()).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
