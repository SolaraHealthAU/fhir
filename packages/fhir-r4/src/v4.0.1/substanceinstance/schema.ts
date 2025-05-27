import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
  createQuantitySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceInstanceSchema() {
  return getCachedSchema("SubstanceInstance", () => {
    const baseSchema: z.ZodType<types.SubstanceInstance> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      expiry: primitives.getDateTimeSchema().optional(),
      _expiry: z.lazy(() => createElementSchema()).optional(),
      quantity: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}
