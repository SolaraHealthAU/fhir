import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCodeSystemDesignationSchema } from "../codesystemdesignation/schema";
import { createCodeSystemProperty1Schema } from "../codesystemproperty1/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemConceptSchema() {
  const baseSchema: z.ZodType<types.CodeSystemConcept> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    definition: primitives.createStringSchema().optional(),
    _definition: z.lazy(() => createElementSchema()).optional(),
    designation: z
      .array(z.lazy(() => createCodeSystemDesignationSchema()))
      .optional(),
    property: z
      .array(z.lazy(() => createCodeSystemProperty1Schema()))
      .optional(),
    concept: z.array(z.lazy(() => createCodeSystemConceptSchema())).optional(),
  });

  return baseSchema;
}
