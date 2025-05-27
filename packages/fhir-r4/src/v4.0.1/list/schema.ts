import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("List", () => {
    const baseSchema: z.ZodType<types.List> = z.strictObject({
      resourceType: z.literal("List"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      status: z.enum(["current", "retired", "entered-in-error"]),
      _status: z.lazy(() => createElementSchema()).optional(),
      mode: z.enum(["working", "snapshot", "changes"]),
      _mode: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      code: createCodeableConceptSchema().optional(),
      subject: createReferenceSchema().optional(),
      encounter: createReferenceSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      source: createReferenceSchema().optional(),
      orderedBy: createCodeableConceptSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
      entry: z.array(createListEntrySchema()).optional(),
      emptyReason: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}
