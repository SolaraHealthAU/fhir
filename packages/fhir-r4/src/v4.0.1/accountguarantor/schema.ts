import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountGuarantorSchema() {
  return getCachedSchema("AccountGuarantor", () => {
    const baseSchema: z.ZodType<types.AccountGuarantor> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      party: createReferenceSchema(),
      onHold: primitives.getBooleanSchema().optional(),
      _onHold: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
