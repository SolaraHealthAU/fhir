import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementDocumentSchema() {
  return getCachedSchema("CapabilityStatementDocument", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementDocument> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        mode: z.enum(["producer", "consumer"]),
        _mode: z.lazy(() => createElementSchema()).optional(),
        documentation: primitives.getMarkdownSchema().optional(),
        _documentation: z.lazy(() => createElementSchema()).optional(),
        profile: primitives.getCanonicalSchema(),
      });

    return baseSchema;
  });
}
