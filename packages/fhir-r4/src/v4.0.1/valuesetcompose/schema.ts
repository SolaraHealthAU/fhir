import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetIncludeSchema } from "../valuesetinclude/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetComposeSchema() {
  return getCachedSchema("ValueSetCompose", () => {
    const baseSchema: z.ZodType<types.ValueSetCompose> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      lockedDate: primitives.getDateSchema().optional(),
      _lockedDate: createElementSchema().optional(),
      inactive: primitives.getBooleanSchema().optional(),
      _inactive: createElementSchema().optional(),
      include: z.array(createValueSetIncludeSchema()),
      exclude: z.array(createValueSetIncludeSchema()).optional(),
    });

    return baseSchema;
  });
}
