import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseErrorSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityResponseError> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.lazy(() => createCodeableConceptSchema()),
      expression: z.array(primitives.createStringSchema()).optional(),
      _expression: z.array(z.lazy(() => createElementSchema())).optional(),
    });

  return baseSchema;
}
