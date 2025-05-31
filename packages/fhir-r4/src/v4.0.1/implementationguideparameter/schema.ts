import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideParameterSchema() {
  return getCachedSchema("ImplementationGuideParameter", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideParameter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: z
          .enum([
            "apply",
            "path-resource",
            "path-pages",
            "path-tx-cache",
            "expansion-parameter",
            "rule-broken-links",
            "generate-xml",
            "generate-json",
            "generate-turtle",
            "html-template",
          ])
          .optional(),
        _code: createElementSchema().optional(),
        value: primitives.getStringSchema().optional(),
        _value: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
