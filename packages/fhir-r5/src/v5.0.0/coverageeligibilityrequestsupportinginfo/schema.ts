import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestSupportingInfoSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityRequestSupportingInfo> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      sequence: primitives.createPositiveIntSchema().optional(),
      _sequence: z.lazy(() => createElementSchema()).optional(),
      information: z.lazy(() => createReferenceSchema()),
      appliesToAll: primitives.createBooleanSchema().optional(),
      _appliesToAll: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
