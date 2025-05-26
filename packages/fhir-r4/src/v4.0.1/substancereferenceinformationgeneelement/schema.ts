import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationGeneElementSchema() {
  const baseSchema: z.ZodType<types.SubstanceReferenceInformationGeneElement> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      element: z.lazy(() => createIdentifierSchema()).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
