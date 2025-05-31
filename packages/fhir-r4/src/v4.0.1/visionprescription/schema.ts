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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      created: primitives.getDateTimeSchema(),
      _created: createElementSchema().optional(),
      patient: createReferenceSchema(),
      encounter: createReferenceSchema().optional(),
      dateWritten: primitives.getDateTimeSchema(),
      _dateWritten: createElementSchema().optional(),
      prescriber: createReferenceSchema(),
      lensSpecification: z.array(
        createVisionPrescriptionLensSpecificationSchema(),
      ),
    });

    return baseSchema;
  });
}
