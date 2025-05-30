import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSearchParamSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementSearchParam> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    definition: primitives.createCanonicalSchema().optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
