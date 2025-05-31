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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        strength: z
          .enum(["required", "extensible", "preferred", "example"])
          .optional(),
        _strength: createElementSchema().optional(),
        valueSet: primitives.getCanonicalSchema(),
      });

    return baseSchema;
  });
}
