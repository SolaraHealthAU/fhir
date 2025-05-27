import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionReferencedFromSchema() {
  return getCachedSchema("OperationDefinitionReferencedFrom", () => {
    const baseSchema: z.ZodType<types.OperationDefinitionReferencedFrom> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        source: primitives.getStringSchema().optional(),
        _source: z.lazy(() => createElementSchema()).optional(),
        sourceId: primitives.getStringSchema().optional(),
        _sourceId: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
