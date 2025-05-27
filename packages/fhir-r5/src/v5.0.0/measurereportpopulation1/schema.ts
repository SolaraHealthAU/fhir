import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMeasureReportPopulation1Schema() {
  const baseSchema: z.ZodType<types.MeasureReportPopulation1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    linkId: primitives.createStringSchema().optional(),
    _linkId: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    count: primitives.createIntegerSchema().optional(),
    _count: z.lazy(() => createElementSchema()).optional(),
    subjectResults: z.lazy(() => createReferenceSchema()).optional(),
    subjectReport: z.array(z.lazy(() => createReferenceSchema())).optional(),
    subjects: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
