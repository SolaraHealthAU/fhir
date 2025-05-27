import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createSubstanceSpecificationOfficialSchema } from "../substancespecificationofficial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationNameSchema() {
  return getCachedSchema("SubstanceSpecificationName", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationName> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        name: primitives.getStringSchema(),
        _name: z.lazy(() => createElementSchema()).optional(),
        type: createCodeableConceptSchema().optional(),
        status: createCodeableConceptSchema().optional(),
        preferred: primitives.getBooleanSchema().optional(),
        _preferred: z.lazy(() => createElementSchema()).optional(),
        language: z.array(createCodeableConceptSchema()).optional(),
        domain: z.array(createCodeableConceptSchema()).optional(),
        jurisdiction: z.array(createCodeableConceptSchema()).optional(),
        synonym: z.array(createSubstanceSpecificationNameSchema()).optional(),
        translation: z
          .array(createSubstanceSpecificationNameSchema())
          .optional(),
        official: z
          .array(createSubstanceSpecificationOfficialSchema())
          .optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
