import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetParameterSchema } from "../valuesetparameter/schema";
import { createValueSetContainsSchema } from "../valuesetcontains/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetExpansionSchema() {
  return getCachedSchema("ValueSetExpansion", () => {
    const baseSchema: z.ZodType<types.ValueSetExpansion> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: primitives.getUriSchema().optional(),
      _identifier: createElementSchema().optional(),
      timestamp: primitives.getDateTimeSchema(),
      _timestamp: createElementSchema().optional(),
      total: primitives.getIntegerSchema().optional(),
      _total: createElementSchema().optional(),
      offset: primitives.getIntegerSchema().optional(),
      _offset: createElementSchema().optional(),
      parameter: z.array(createValueSetParameterSchema()).optional(),
      contains: z.array(createValueSetContainsSchema()).optional(),
    });

    return baseSchema;
  });
}
