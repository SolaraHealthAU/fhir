import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationGeneElementSchema() {
  return getCachedSchema("SubstanceReferenceInformationGeneElement", () => {
    const baseSchema: z.ZodType<types.SubstanceReferenceInformationGeneElement> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: createCodeableConceptSchema().optional(),
        element: z.lazy(() => createIdentifierSchema()).optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
