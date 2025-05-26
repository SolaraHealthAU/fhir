import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideParameterSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideParameter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
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
    _code: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
