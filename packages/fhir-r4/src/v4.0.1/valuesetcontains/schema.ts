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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      abstract: primitives.getBooleanSchema().optional(),
      _abstract: z.lazy(() => createElementSchema()).optional(),
      inactive: primitives.getBooleanSchema().optional(),
      _inactive: z.lazy(() => createElementSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
      designation: z.array(createValueSetDesignationSchema()).optional(),
      contains: z.array(createValueSetContainsSchema()).optional(),
    });

    return baseSchema;
  });
}
