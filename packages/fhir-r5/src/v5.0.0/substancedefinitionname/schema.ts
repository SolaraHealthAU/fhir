import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createSubstanceDefinitionOfficialSchema } from "../substancedefinitionofficial/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceDefinitionNameSchema() {
  const baseSchema: z.ZodType<types.SubstanceDefinitionName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    preferred: primitives.createBooleanSchema().optional(),
    _preferred: z.lazy(() => createElementSchema()).optional(),
    language: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    domain: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    synonym: z
      .array(z.lazy(() => createSubstanceDefinitionNameSchema()))
      .optional(),
    translation: z
      .array(z.lazy(() => createSubstanceDefinitionNameSchema()))
      .optional(),
    official: z
      .array(z.lazy(() => createSubstanceDefinitionOfficialSchema()))
      .optional(),
    source: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
