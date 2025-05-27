import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGenomicStudyInputSchema() {
  const baseSchema: z.ZodType<types.GenomicStudyInput> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    file: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    generatedByIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    generatedByReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
