import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceCertaintySchema() {
  const baseSchema: z.ZodType<types.EvidenceCertainty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    rating: z.lazy(() => createCodeableConceptSchema()).optional(),
    rater: primitives.createStringSchema().optional(),
    _rater: z.lazy(() => createElementSchema()).optional(),
    subcomponent: z
      .array(z.lazy(() => createEvidenceCertaintySchema()))
      .optional(),
  });

  return baseSchema;
}
