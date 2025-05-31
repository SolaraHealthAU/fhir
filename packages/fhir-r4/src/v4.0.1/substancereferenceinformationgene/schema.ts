import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationGeneSchema() {
  return getCachedSchema("SubstanceReferenceInformationGene", () => {
    const baseSchema: z.ZodType<types.SubstanceReferenceInformationGene> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        geneSequenceOrigin: createCodeableConceptSchema().optional(),
        gene: createCodeableConceptSchema().optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
