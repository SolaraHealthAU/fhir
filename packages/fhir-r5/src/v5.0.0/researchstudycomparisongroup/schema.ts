import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudyComparisonGroupSchema() {
  const baseSchema: z.ZodType<types.ResearchStudyComparisonGroup> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createIdSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    intendedExposure: z.array(z.lazy(() => createReferenceSchema())).optional(),
    observedGroup: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
