import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
  createCountSchema,
  createDurationSchema,
  createReferenceSchema,
  createContactPointSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceUdiCarrierSchema } from "../deviceudicarrier/schema";
import { createDeviceNameSchema } from "../devicename/schema";
import { createDeviceVersionSchema } from "../deviceversion/schema";
import { createDeviceConformsToSchema } from "../deviceconformsto/schema";
import { createDevicePropertySchema } from "../deviceproperty/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceSchema() {
  const baseSchema: z.ZodType<types.Device> = z.object({
    resourceType: z.literal("Device"),
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
    displayName: primitives.createStringSchema().optional(),
    _displayName: z.lazy(() => createElementSchema()).optional(),
    definition: z.lazy(() => createCodeableReferenceSchema()).optional(),
    udiCarrier: z
      .array(z.lazy(() => createDeviceUdiCarrierSchema()))
      .optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    availabilityStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
    biologicalSourceEvent: z.lazy(() => createIdentifierSchema()).optional(),
    manufacturer: primitives.createStringSchema().optional(),
    _manufacturer: z.lazy(() => createElementSchema()).optional(),
    manufactureDate: primitives.createDateTimeSchema().optional(),
    _manufactureDate: z.lazy(() => createElementSchema()).optional(),
    expirationDate: primitives.createDateTimeSchema().optional(),
    _expirationDate: z.lazy(() => createElementSchema()).optional(),
    lotNumber: primitives.createStringSchema().optional(),
    _lotNumber: z.lazy(() => createElementSchema()).optional(),
    serialNumber: primitives.createStringSchema().optional(),
    _serialNumber: z.lazy(() => createElementSchema()).optional(),
    name: z.array(z.lazy(() => createDeviceNameSchema())).optional(),
    modelNumber: primitives.createStringSchema().optional(),
    _modelNumber: z.lazy(() => createElementSchema()).optional(),
    partNumber: primitives.createStringSchema().optional(),
    _partNumber: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    version: z.array(z.lazy(() => createDeviceVersionSchema())).optional(),
    conformsTo: z
      .array(z.lazy(() => createDeviceConformsToSchema()))
      .optional(),
    property: z.array(z.lazy(() => createDevicePropertySchema())).optional(),
    mode: z.lazy(() => createCodeableConceptSchema()).optional(),
    cycle: z.lazy(() => createCountSchema()).optional(),
    duration: z.lazy(() => createDurationSchema()).optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
    gateway: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    safety: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    parent: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
