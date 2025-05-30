import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createElementDefinitionAdditionalSchema } from "../elementdefinitionadditional/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionBindingSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionBinding> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    strength: z.enum(["required", "extensible", "preferred", "example"]),
    _strength: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema().optional(),
    additional: z
      .array(z.lazy(() => createElementDefinitionAdditionalSchema()))
      .optional(),
  });

  return baseSchema;
}
