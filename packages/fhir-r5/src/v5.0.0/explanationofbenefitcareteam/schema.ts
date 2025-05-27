import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitCareTeamSchema() {
  const baseSchema: z.ZodType<types.ExplanationOfBenefitCareTeam> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    provider: z.lazy(() => createReferenceSchema()),
    responsible: primitives.createBooleanSchema().optional(),
    _responsible: z.lazy(() => createElementSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    specialty: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
