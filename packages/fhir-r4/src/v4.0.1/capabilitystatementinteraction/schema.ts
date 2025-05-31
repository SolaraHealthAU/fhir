import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementInteractionSchema() {
  return getCachedSchema("CapabilityStatementInteraction", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementInteraction> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        code: z
          .enum([
            "read",
            "vread",
            "update",
            "patch",
            "delete",
            "history-instance",
            "history-type",
            "create",
            "search-type",
          ])
          .optional(),
        _code: createElementSchema().optional(),
        documentation: primitives.getMarkdownSchema().optional(),
        _documentation: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
