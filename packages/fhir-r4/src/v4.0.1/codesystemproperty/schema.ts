import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemPropertySchema() {
  return getCachedSchema("CodeSystemProperty", () => {
    const baseSchema: z.ZodType<types.CodeSystemProperty> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: primitives.getCodeSchema(),
      _code: z.lazy(() => createElementSchema()).optional(),
      uri: primitives.getUriSchema().optional(),
      _uri: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      type: z.enum([
        "code",
        "Coding",
        "string",
        "integer",
        "boolean",
        "dateTime",
        "decimal",
      ]),
      _type: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
