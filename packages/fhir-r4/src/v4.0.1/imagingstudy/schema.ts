import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createImagingStudySeriesSchema } from "../imagingstudyseries/schema";

/* Generated from FHIR JSON Schema */

export function createImagingStudySchema() {
  return getCachedSchema("ImagingStudy", () => {
    const baseSchema: z.ZodType<types.ImagingStudy> = z.strictObject({
      resourceType: z.literal("ImagingStudy"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum([
        "registered",
        "available",
        "cancelled",
        "entered-in-error",
        "unknown",
      ]),
      _status: createElementSchema().optional(),
      modality: z.array(createCodingSchema()).optional(),
      subject: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      started: primitives.getDateTimeSchema().optional(),
      _started: createElementSchema().optional(),
      basedOn: z.array(createReferenceSchema()).optional(),
      referrer: createReferenceSchema().optional(),
      interpreter: z.array(createReferenceSchema()).optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
      numberOfSeries: primitives.getUnsignedIntSchema().optional(),
      _numberOfSeries: createElementSchema().optional(),
      numberOfInstances: primitives.getUnsignedIntSchema().optional(),
      _numberOfInstances: createElementSchema().optional(),
      procedureReference: createReferenceSchema().optional(),
      procedureCode: z.array(createCodeableConceptSchema()).optional(),
      location: createReferenceSchema().optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      series: z.array(createImagingStudySeriesSchema()).optional(),
    });

    return baseSchema;
  });
}
