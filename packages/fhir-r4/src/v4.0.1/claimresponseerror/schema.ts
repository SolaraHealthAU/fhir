import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseErrorSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseError> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemSequence: primitives.createPositiveIntSchema().optional(),
    _itemSequence: z.lazy(() => createElementSchema()).optional(),
    detailSequence: primitives.createPositiveIntSchema().optional(),
    _detailSequence: z.lazy(() => createElementSchema()).optional(),
    subDetailSequence: primitives.createPositiveIntSchema().optional(),
    _subDetailSequence: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
  });

  return baseSchema;
}
