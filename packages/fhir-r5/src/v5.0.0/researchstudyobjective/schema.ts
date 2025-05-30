import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudyObjectiveSchema() {
  const baseSchema: z.ZodType<types.ResearchStudyObjective> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
