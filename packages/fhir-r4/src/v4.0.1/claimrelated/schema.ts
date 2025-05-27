import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimRelatedSchema() {
  return getCachedSchema("ClaimRelated", () => {
    const baseSchema: z.ZodType<types.ClaimRelated> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      claim: createReferenceSchema().optional(),
      relationship: createCodeableConceptSchema().optional(),
      reference: z.lazy(() => createIdentifierSchema()).optional(),
    });

    return baseSchema;
  });
}
