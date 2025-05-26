import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetParameterSchema } from "../valuesetparameter/schema";
import { createValueSetContainsSchema } from "../valuesetcontains/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetExpansionSchema() {
  const baseSchema: z.ZodType<types.ValueSetExpansion> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: primitives.createUriSchema().optional(),
    _identifier: z.lazy(() => createElementSchema()).optional(),
    timestamp: primitives.createDateTimeSchema(),
    _timestamp: z.lazy(() => createElementSchema()).optional(),
    total: primitives.createIntegerSchema().optional(),
    _total: z.lazy(() => createElementSchema()).optional(),
    offset: primitives.createIntegerSchema().optional(),
    _offset: z.lazy(() => createElementSchema()).optional(),
    parameter: z
      .array(z.lazy(() => createValueSetParameterSchema()))
      .optional(),
    contains: z.array(z.lazy(() => createValueSetContainsSchema())).optional(),
  });

  return baseSchema;
}
