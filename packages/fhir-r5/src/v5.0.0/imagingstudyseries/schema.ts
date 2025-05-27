import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createImagingStudyPerformerSchema } from "../imagingstudyperformer/schema";
import { createImagingStudyInstanceSchema } from "../imagingstudyinstance/schema";

/* Generated from FHIR JSON Schema */

export function createImagingStudySeriesSchema() {
  const baseSchema: z.ZodType<types.ImagingStudySeries> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    uid: primitives.createIdSchema().optional(),
    _uid: z.lazy(() => createElementSchema()).optional(),
    number: primitives.createUnsignedIntSchema().optional(),
    _number: z.lazy(() => createElementSchema()).optional(),
    modality: z.lazy(() => createCodeableConceptSchema()),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    numberOfInstances: primitives.createUnsignedIntSchema().optional(),
    _numberOfInstances: z.lazy(() => createElementSchema()).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.lazy(() => createCodeableReferenceSchema()).optional(),
    laterality: z.lazy(() => createCodeableConceptSchema()).optional(),
    specimen: z.array(z.lazy(() => createReferenceSchema())).optional(),
    started: primitives.createDateTimeSchema().optional(),
    _started: z.lazy(() => createElementSchema()).optional(),
    performer: z
      .array(z.lazy(() => createImagingStudyPerformerSchema()))
      .optional(),
    instance: z
      .array(z.lazy(() => createImagingStudyInstanceSchema()))
      .optional(),
  });

  return baseSchema;
}
