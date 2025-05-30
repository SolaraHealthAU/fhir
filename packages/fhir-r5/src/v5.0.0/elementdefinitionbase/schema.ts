import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionBaseSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionBase> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    path: primitives.createStringSchema(),
    _path: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createUnsignedIntSchema(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema(),
    _max: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
