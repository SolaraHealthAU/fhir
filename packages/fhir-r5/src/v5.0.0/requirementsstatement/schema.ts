import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRequirementsStatementSchema() {
  const baseSchema: z.ZodType<types.RequirementsStatement> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    key: primitives.createIdSchema().optional(),
    _key: z.lazy(() => createElementSchema()).optional(),
    label: primitives.createStringSchema().optional(),
    _label: z.lazy(() => createElementSchema()).optional(),
    conformance: z.array(primitives.createCodeSchema()).optional(),
    _conformance: z.array(z.lazy(() => createElementSchema())).optional(),
    conditionality: primitives.createBooleanSchema().optional(),
    _conditionality: z.lazy(() => createElementSchema()).optional(),
    requirement: primitives.createMarkdownSchema().optional(),
    _requirement: z.lazy(() => createElementSchema()).optional(),
    derivedFrom: primitives.createStringSchema().optional(),
    _derivedFrom: z.lazy(() => createElementSchema()).optional(),
    parent: primitives.createStringSchema().optional(),
    _parent: z.lazy(() => createElementSchema()).optional(),
    satisfiedBy: z.array(primitives.createUrlSchema()).optional(),
    _satisfiedBy: z.array(z.lazy(() => createElementSchema())).optional(),
    reference: z.array(primitives.createUrlSchema()).optional(),
    _reference: z.array(z.lazy(() => createElementSchema())).optional(),
    source: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
