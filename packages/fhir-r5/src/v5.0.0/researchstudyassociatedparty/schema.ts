import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createResearchStudyAssociatedPartySchema() {
  const baseSchema: z.ZodType<types.ResearchStudyAssociatedParty> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()),
    period: z.array(z.lazy(() => createPeriodSchema())).optional(),
    classifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    party: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
