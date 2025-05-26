import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceReferenceInformationClassificationSchema() {
  const baseSchema: z.ZodType<types.SubstanceReferenceInformationClassification> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      domain: z.lazy(() => createCodeableConceptSchema()).optional(),
      classification: z.lazy(() => createCodeableConceptSchema()).optional(),
      subtype: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      source: z.array(z.lazy(() => createReferenceSchema())).optional(),
    });

  return baseSchema;
}
