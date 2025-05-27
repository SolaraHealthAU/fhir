import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("VisionPrescription", () => {
    const baseSchema: z.ZodType<types.VisionPrescription> = z.strictObject({
      resourceType: z.literal("VisionPrescription"),
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
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      created: primitives.getDateTimeSchema(),
      _created: z.lazy(() => createElementSchema()).optional(),
      patient: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      dateWritten: primitives.getDateTimeSchema(),
      _dateWritten: z.lazy(() => createElementSchema()).optional(),
      prescriber: createReferenceSchema(),
      lensSpecification: z.array(
        createVisionPrescriptionLensSpecificationSchema(),
      ),
    });

    return baseSchema;
  });
}
