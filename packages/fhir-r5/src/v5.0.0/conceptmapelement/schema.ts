import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createConceptMapTargetSchema } from "../conceptmaptarget/schema";

/* Generated from FHIR JSON Schema */

export function createConceptMapElementSchema() {
  const baseSchema: z.ZodType<types.ConceptMapElement> = z.object({
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
    noMap: primitives.createBooleanSchema().optional(),
    _noMap: z.lazy(() => createElementSchema()).optional(),
    target: z.array(z.lazy(() => createConceptMapTargetSchema())).optional(),
  });

  return baseSchema;
}
