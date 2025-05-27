import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionRepresentationSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionRepresentation> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()).optional(),
      representation: primitives.createStringSchema().optional(),
      _representation: z.lazy(() => createElementSchema()).optional(),
      format: z.lazy(() => createCodeableConceptSchema()).optional(),
      document: z.lazy(() => createReferenceSchema()).optional(),
    });

  return baseSchema;
}
