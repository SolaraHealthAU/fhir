import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createVisionPrescriptionLensSpecificationSchema } from "../visionprescriptionlensspecification/schema";

/* Generated from FHIR JSON Schema */

export function createVisionPrescriptionSchema() {
  const baseSchema: z.ZodType<types.VisionPrescription> = z.object({
    resourceType: z.literal("VisionPrescription"),
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
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    created: primitives.createDateTimeSchema(),
    _created: z.lazy(() => createElementSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    dateWritten: primitives.createDateTimeSchema(),
    _dateWritten: z.lazy(() => createElementSchema()).optional(),
    prescriber: z.lazy(() => createReferenceSchema()),
    lensSpecification: z.array(
      z.lazy(() => createVisionPrescriptionLensSpecificationSchema()),
    ),
  });

  return baseSchema;
}
