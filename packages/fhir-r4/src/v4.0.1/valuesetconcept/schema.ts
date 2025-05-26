import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetDesignationSchema } from "../valuesetdesignation/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetConceptSchema() {
  const baseSchema: z.ZodType<types.ValueSetConcept> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    designation: z
      .array(z.lazy(() => createValueSetDesignationSchema()))
      .optional(),
  });

  return baseSchema;
}
