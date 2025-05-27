import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceReportSectionSchema() {
  const baseSchema: z.ZodType<types.EvidenceReportSection> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    focus: z.lazy(() => createCodeableConceptSchema()).optional(),
    focusReference: z.lazy(() => createReferenceSchema()).optional(),
    author: z.array(z.lazy(() => createReferenceSchema())).optional(),
    text: z.lazy(() => createNarrativeSchema()).optional(),
    mode: primitives.createCodeSchema().optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    orderedBy: z.lazy(() => createCodeableConceptSchema()).optional(),
    entryClassifier: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    entryReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    entryQuantity: z.array(z.lazy(() => createQuantitySchema())).optional(),
    emptyReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    section: z
      .array(z.lazy(() => createEvidenceReportSectionSchema()))
      .optional(),
  });

  return baseSchema;
}
