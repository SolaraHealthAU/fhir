import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationDefinitionReferencedFromSchema() {
  const baseSchema: z.ZodType<types.OperationDefinitionReferencedFrom> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      source: primitives.createStringSchema().optional(),
      _source: z.lazy(() => createElementSchema()).optional(),
      sourceId: primitives.createStringSchema().optional(),
      _sourceId: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
