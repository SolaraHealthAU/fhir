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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      definition: createReferenceSchema().optional(),
      udiCarrier: z.array(createDeviceUdiCarrierSchema()).optional(),
      status: z
        .enum(["active", "inactive", "entered-in-error", "unknown"])
        .optional(),
      _status: createElementSchema().optional(),
      statusReason: z.array(createCodeableConceptSchema()).optional(),
      distinctIdentifier: primitives.getStringSchema().optional(),
      _distinctIdentifier: createElementSchema().optional(),
      manufacturer: primitives.getStringSchema().optional(),
      _manufacturer: createElementSchema().optional(),
      manufactureDate: primitives.getDateTimeSchema().optional(),
      _manufactureDate: createElementSchema().optional(),
      expirationDate: primitives.getDateTimeSchema().optional(),
      _expirationDate: createElementSchema().optional(),
      lotNumber: primitives.getStringSchema().optional(),
      _lotNumber: createElementSchema().optional(),
      serialNumber: primitives.getStringSchema().optional(),
      _serialNumber: createElementSchema().optional(),
      deviceName: z.array(createDeviceDeviceNameSchema()).optional(),
      modelNumber: primitives.getStringSchema().optional(),
      _modelNumber: createElementSchema().optional(),
      partNumber: primitives.getStringSchema().optional(),
      _partNumber: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      specialization: z.array(createDeviceSpecializationSchema()).optional(),
      version: z.array(createDeviceVersionSchema()).optional(),
      property: z.array(createDevicePropertySchema()).optional(),
      patient: createReferenceSchema().optional(),
      owner: createReferenceSchema().optional(),
      contact: z.array(createContactPointSchema()).optional(),
      location: createReferenceSchema().optional(),
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
      safety: z.array(createCodeableConceptSchema()).optional(),
      parent: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
