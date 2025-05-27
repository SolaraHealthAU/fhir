import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createAddressSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimAccidentSchema() {
  return getCachedSchema("ClaimAccident", () => {
    const baseSchema: z.ZodType<types.ClaimAccident> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      date: primitives.getDateSchema(),
      _date: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      locationAddress: createAddressSchema().optional(),
      locationReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
