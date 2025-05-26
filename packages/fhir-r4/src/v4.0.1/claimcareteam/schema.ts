import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimCareTeamSchema() {
  const baseSchema: z.ZodType<types.ClaimCareTeam> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    provider: z.lazy(() => createReferenceSchema()),
    responsible: primitives.createBooleanSchema().optional(),
    _responsible: z.lazy(() => createElementSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    qualification: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
