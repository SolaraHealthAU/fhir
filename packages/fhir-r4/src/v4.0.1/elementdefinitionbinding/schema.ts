import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionBindingSchema() {
  return getCachedSchema("ElementDefinitionBinding", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionBinding> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        strength: z.enum(["required", "extensible", "preferred", "example"]),
        _strength: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        valueSet: primitives.getCanonicalSchema().optional(),
      });

    return baseSchema;
  });
}
