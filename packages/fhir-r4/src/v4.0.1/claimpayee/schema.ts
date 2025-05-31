import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimPayeeSchema() {
  return getCachedSchema("ClaimPayee", () => {
    const baseSchema: z.ZodType<types.ClaimPayee> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodeableConceptSchema(),
      party: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
