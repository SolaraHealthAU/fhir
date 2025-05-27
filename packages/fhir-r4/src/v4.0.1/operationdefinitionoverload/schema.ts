import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionOverloadSchema() {
  return getCachedSchema("OperationDefinitionOverload", () => {
    const baseSchema: z.ZodType<types.OperationDefinitionOverload> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        parameterName: z.array(primitives.getStringSchema()).optional(),
        _parameterName: z.array(z.lazy(() => createElementSchema())).optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
