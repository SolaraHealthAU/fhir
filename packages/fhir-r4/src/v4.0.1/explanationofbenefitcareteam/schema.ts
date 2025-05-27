import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExplanationOfBenefitCareTeamSchema() {
  return getCachedSchema("ExplanationOfBenefitCareTeam", () => {
    const baseSchema: z.ZodType<types.ExplanationOfBenefitCareTeam> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: z.lazy(() => createElementSchema()).optional(),
        provider: createReferenceSchema(),
        responsible: primitives.getBooleanSchema().optional(),
        _responsible: z.lazy(() => createElementSchema()).optional(),
        role: createCodeableConceptSchema().optional(),
        qualification: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
