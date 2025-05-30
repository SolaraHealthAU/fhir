import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createReferenceSchema,
} from "../core/schema";
import { createImagingStudyPerformerSchema } from "../imagingstudyperformer/schema";
import { createImagingStudyInstanceSchema } from "../imagingstudyinstance/schema";

/* Generated from FHIR JSON Schema */

export function createImagingStudySeriesSchema() {
  return getCachedSchema("ImagingStudySeries", () => {
    const baseSchema: z.ZodType<types.ImagingStudySeries> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      uid: primitives.getIdSchema(),
      _uid: z.lazy(() => createElementSchema()).optional(),
      number: primitives.getUnsignedIntSchema().optional(),
      _number: z.lazy(() => createElementSchema()).optional(),
      modality: createCodingSchema(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      numberOfInstances: primitives.getUnsignedIntSchema().optional(),
      _numberOfInstances: z.lazy(() => createElementSchema()).optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
      bodySite: createCodingSchema().optional(),
      laterality: createCodingSchema().optional(),
      specimen: z.array(createReferenceSchema()).optional(),
      started: primitives.getDateTimeSchema().optional(),
      _started: z.lazy(() => createElementSchema()).optional(),
      performer: z.array(createImagingStudyPerformerSchema()).optional(),
      instance: z.array(createImagingStudyInstanceSchema()).optional(),
    });

    return baseSchema;
  });
}
