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
  createCodeableConceptSchema,
  createContactPointSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceUdiCarrierSchema } from "../deviceudicarrier/schema";
import { createDeviceDeviceNameSchema } from "../devicedevicename/schema";
import { createDeviceSpecializationSchema } from "../devicespecialization/schema";
import { createDeviceVersionSchema } from "../deviceversion/schema";
import { createDevicePropertySchema } from "../deviceproperty/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceSchema() {
  return getCachedSchema("Device", () => {
    const baseSchema: z.ZodType<types.Device> = z.strictObject({
      resourceType: z.literal("Device"),
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
      definition: createReferenceSchema().optional(),
      udiCarrier: z.array(createDeviceUdiCarrierSchema()).optional(),
      status: z
        .enum(["active", "inactive", "entered-in-error", "unknown"])
        .optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusReason: z.array(createCodeableConceptSchema()).optional(),
      distinctIdentifier: primitives.getStringSchema().optional(),
      _distinctIdentifier: z.lazy(() => createElementSchema()).optional(),
      manufacturer: primitives.getStringSchema().optional(),
      _manufacturer: z.lazy(() => createElementSchema()).optional(),
      manufactureDate: primitives.getDateTimeSchema().optional(),
      _manufactureDate: z.lazy(() => createElementSchema()).optional(),
      expirationDate: primitives.getDateTimeSchema().optional(),
      _expirationDate: z.lazy(() => createElementSchema()).optional(),
      lotNumber: primitives.getStringSchema().optional(),
      _lotNumber: z.lazy(() => createElementSchema()).optional(),
      serialNumber: primitives.getStringSchema().optional(),
      _serialNumber: z.lazy(() => createElementSchema()).optional(),
      deviceName: z.array(createDeviceDeviceNameSchema()).optional(),
      modelNumber: primitives.getStringSchema().optional(),
      _modelNumber: z.lazy(() => createElementSchema()).optional(),
      partNumber: primitives.getStringSchema().optional(),
      _partNumber: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      specialization: z.array(createDeviceSpecializationSchema()).optional(),
      version: z.array(createDeviceVersionSchema()).optional(),
      property: z.array(createDevicePropertySchema()).optional(),
      patient: createReferenceSchema().optional(),
      owner: createReferenceSchema().optional(),
      contact: z.array(createContactPointSchema()).optional(),
      location: createReferenceSchema().optional(),
      url: primitives.getUriSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      safety: z.array(createCodeableConceptSchema()).optional(),
      parent: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
