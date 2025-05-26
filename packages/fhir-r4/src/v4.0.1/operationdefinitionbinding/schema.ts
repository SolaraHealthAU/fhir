import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionBindingSchema() {
  const baseSchema: z.ZodType<types.OperationDefinitionBinding> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    strength: z
      .enum(["required", "extensible", "preferred", "example"])
      .optional(),
    _strength: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema(),
  });

  return baseSchema;
}
