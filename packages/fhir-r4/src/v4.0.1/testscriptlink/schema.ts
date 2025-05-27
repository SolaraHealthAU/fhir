import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptLinkSchema() {
  return getCachedSchema("TestScriptLink", () => {
    const baseSchema: z.ZodType<types.TestScriptLink> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
