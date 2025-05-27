import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementInteraction1Schema() {
  const baseSchema: z.ZodType<types.CapabilityStatementInteraction1> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z
        .enum(["transaction", "batch", "search-system", "history-system"])
        .optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
      documentation: primitives.createMarkdownSchema().optional(),
      _documentation: z.lazy(() => createElementSchema()).optional(),
    },
  );

  return baseSchema;
}
