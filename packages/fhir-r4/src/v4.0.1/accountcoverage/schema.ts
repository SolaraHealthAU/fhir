import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountCoverageSchema() {
  return getCachedSchema("AccountCoverage", () => {
    const baseSchema: z.ZodType<types.AccountCoverage> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      coverage: createReferenceSchema(),
      priority: primitives.getPositiveIntSchema().optional(),
      _priority: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
