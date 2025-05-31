import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetDesignationSchema } from "../valuesetdesignation/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetContainsSchema() {
  return getCachedSchema("ValueSetContains", () => {
    const baseSchema: z.ZodType<types.ValueSetContains> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: createElementSchema().optional(),
      abstract: primitives.getBooleanSchema().optional(),
      _abstract: createElementSchema().optional(),
      inactive: primitives.getBooleanSchema().optional(),
      _inactive: createElementSchema().optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      code: primitives.getCodeSchema().optional(),
      _code: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
      designation: z.array(createValueSetDesignationSchema()).optional(),
      contains: z.array(createValueSetContainsSchema()).optional(),
    });

    return baseSchema;
  });
}
