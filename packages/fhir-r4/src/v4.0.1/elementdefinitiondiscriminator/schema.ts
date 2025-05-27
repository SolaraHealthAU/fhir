import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionDiscriminatorSchema() {
  return getCachedSchema("ElementDefinitionDiscriminator", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionDiscriminator> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: z
          .enum(["value", "exists", "pattern", "type", "profile"])
          .optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        path: primitives.getStringSchema().optional(),
        _path: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
