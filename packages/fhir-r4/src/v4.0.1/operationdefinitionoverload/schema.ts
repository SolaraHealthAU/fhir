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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        parameterName: z.array(primitives.getStringSchema()).optional(),
        _parameterName: z.array(createElementSchema()).optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
