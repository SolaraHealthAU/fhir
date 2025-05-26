import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetDesignationSchema } from "../valuesetdesignation/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetContainsSchema() {
  const baseSchema: z.ZodType<types.ValueSetContains> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    abstract: primitives.createBooleanSchema().optional(),
    _abstract: z.lazy(() => createElementSchema()).optional(),
    inactive: primitives.createBooleanSchema().optional(),
    _inactive: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    designation: z
      .array(z.lazy(() => createValueSetDesignationSchema()))
      .optional(),
    contains: z.array(z.lazy(() => createValueSetContainsSchema())).optional(),
  });

  return baseSchema;
}
