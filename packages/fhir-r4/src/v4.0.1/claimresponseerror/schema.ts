import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseErrorSchema() {
  return getCachedSchema("ClaimResponseError", () => {
    const baseSchema: z.ZodType<types.ClaimResponseError> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      itemSequence: primitives.getPositiveIntSchema().optional(),
      _itemSequence: z.lazy(() => createElementSchema()).optional(),
      detailSequence: primitives.getPositiveIntSchema().optional(),
      _detailSequence: z.lazy(() => createElementSchema()).optional(),
      subDetailSequence: primitives.getPositiveIntSchema().optional(),
      _subDetailSequence: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema(),
    });

    return baseSchema;
  });
}
