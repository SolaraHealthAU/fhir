import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionContextSchema() {
  return getCachedSchema("StructureDefinitionContext", () => {
    const baseSchema: z.ZodType<types.StructureDefinitionContext> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: z.enum(["fhirpath", "element", "extension"]),
        _type: z.lazy(() => createElementSchema()).optional(),
        expression: primitives.getStringSchema(),
        _expression: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
