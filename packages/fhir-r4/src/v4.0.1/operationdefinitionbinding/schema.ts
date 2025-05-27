import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionBindingSchema() {
  return getCachedSchema("OperationDefinitionBinding", () => {
    const baseSchema: z.ZodType<types.OperationDefinitionBinding> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        strength: z
          .enum(["required", "extensible", "preferred", "example"])
          .optional(),
        _strength: z.lazy(() => createElementSchema()).optional(),
        valueSet: primitives.getCanonicalSchema(),
      });

    return baseSchema;
  });
}
