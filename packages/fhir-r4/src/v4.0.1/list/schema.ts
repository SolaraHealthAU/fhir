import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createListEntrySchema } from "../listentry/schema";

/* Generated from FHIR JSON Schema */

export function createListSchema() {
  const baseSchema: z.ZodType<types.List> = z.object({
    resourceType: z.literal("List"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    contained: z.array(z.lazy(() => createResourceListSchema())).optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    status: z.enum(["current", "retired", "entered-in-error"]),
    _status: z.lazy(() => createElementSchema()).optional(),
    mode: z.enum(["working", "snapshot", "changes"]),
    _mode: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    source: z.lazy(() => createReferenceSchema()).optional(),
    orderedBy: z.lazy(() => createCodeableConceptSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    entry: z.array(z.lazy(() => createListEntrySchema())).optional(),
    emptyReason: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
