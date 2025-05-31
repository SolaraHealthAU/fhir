import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestSupportingInfoSchema() {
  return getCachedSchema("CoverageEligibilityRequestSupportingInfo", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestSupportingInfo> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        sequence: primitives.getPositiveIntSchema(),
        _sequence: createElementSchema().optional(),
        information: createReferenceSchema(),
        appliesToAll: primitives.getBooleanSchema().optional(),
        _appliesToAll: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
