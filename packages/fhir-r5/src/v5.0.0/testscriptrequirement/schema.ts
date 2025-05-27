import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptRequirementSchema() {
  const baseSchema: z.ZodType<types.TestScriptRequirement> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkUri: z.string().optional(),
    _linkUri: z.lazy(() => createElementSchema()).optional(),
    linkCanonical: z.string().optional(),
    _linkCanonical: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
