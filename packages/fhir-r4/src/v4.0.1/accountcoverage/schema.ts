import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountCoverageSchema() {
  const baseSchema: z.ZodType<types.AccountCoverage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    coverage: z.lazy(() => createReferenceSchema()),
    priority: primitives.createPositiveIntSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
