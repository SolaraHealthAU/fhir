import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetIncludeSchema } from "../valuesetinclude/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetComposeSchema() {
  const baseSchema: z.ZodType<types.ValueSetCompose> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    lockedDate: primitives.createDateSchema().optional(),
    _lockedDate: z.lazy(() => createElementSchema()).optional(),
    inactive: primitives.createBooleanSchema().optional(),
    _inactive: z.lazy(() => createElementSchema()).optional(),
    include: z.array(z.lazy(() => createValueSetIncludeSchema())),
    exclude: z.array(z.lazy(() => createValueSetIncludeSchema())).optional(),
  });

  return baseSchema;
}
