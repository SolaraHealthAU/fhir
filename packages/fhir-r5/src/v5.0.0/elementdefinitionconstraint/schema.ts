import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionConstraintSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionConstraint> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    key: primitives.createIdSchema(),
    _key: z.lazy(() => createElementSchema()).optional(),
    requirements: primitives.createMarkdownSchema().optional(),
    _requirements: z.lazy(() => createElementSchema()).optional(),
    severity: z.enum(["error", "warning"]),
    _severity: z.lazy(() => createElementSchema()).optional(),
    suppress: primitives.createBooleanSchema().optional(),
    _suppress: z.lazy(() => createElementSchema()).optional(),
    human: primitives.createStringSchema(),
    _human: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    source: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}
