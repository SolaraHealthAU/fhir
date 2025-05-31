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

export function createClaimCareTeamSchema() {
  return getCachedSchema("ClaimCareTeam", () => {
    const baseSchema: z.ZodType<types.ClaimCareTeam> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      sequence: primitives.getPositiveIntSchema(),
      _sequence: createElementSchema().optional(),
      provider: createReferenceSchema(),
      responsible: primitives.getBooleanSchema().optional(),
      _responsible: createElementSchema().optional(),
      role: createCodeableConceptSchema().optional(),
      qualification: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
