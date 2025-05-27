import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createConceptMapProperty1Schema } from "../conceptmapproperty1/schema";
import { createConceptMapDependsOnSchema } from "../conceptmapdependson/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapTargetSchema() {
  const baseSchema: z.ZodType<types.ConceptMapTarget> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    valueSet: primitives.createCanonicalSchema().optional(),
    relationship: primitives.createCodeSchema().optional(),
    _relationship: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    property: z
      .array(z.lazy(() => createConceptMapProperty1Schema()))
      .optional(),
    dependsOn: z
      .array(z.lazy(() => createConceptMapDependsOnSchema()))
      .optional(),
    product: z
      .array(z.lazy(() => createConceptMapDependsOnSchema()))
      .optional(),
  });

  return baseSchema;
}
