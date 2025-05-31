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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      uri: primitives.getUriSchema().optional(),
      _uri: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      type: z.enum([
        "code",
        "Coding",
        "string",
        "integer",
        "boolean",
        "dateTime",
        "decimal",
      ]),
      _type: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
