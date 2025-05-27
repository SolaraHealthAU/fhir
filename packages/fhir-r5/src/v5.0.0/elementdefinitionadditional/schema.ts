import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createUsageContextSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionAdditionalSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionAdditional> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    purpose: primitives.createCodeSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema(),
    documentation: primitives.createMarkdownSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    shortDoco: primitives.createStringSchema().optional(),
    _shortDoco: z.lazy(() => createElementSchema()).optional(),
    usage: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    any: primitives.createBooleanSchema().optional(),
    _any: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
