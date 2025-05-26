import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createContactPointSchema,
  createAnnotationSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceDefinitionUdiDeviceIdentifierSchema } from "../devicedefinitionudideviceidentifier/schema";
import { createDeviceDefinitionDeviceNameSchema } from "../devicedefinitiondevicename/schema";
import { createDeviceDefinitionSpecializationSchema } from "../devicedefinitionspecialization/schema";
import { createProductShelfLifeSchema } from "../productshelflife/schema";
import { createProdCharacteristicSchema } from "../prodcharacteristic/schema";
import { createDeviceDefinitionCapabilitySchema } from "../devicedefinitioncapability/schema";
import { createDeviceDefinitionPropertySchema } from "../devicedefinitionproperty/schema";
import { createDeviceDefinitionMaterialSchema } from "../devicedefinitionmaterial/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDefinitionSchema() {
  const baseSchema: z.ZodType<types.DeviceDefinition> = z.object({
    resourceType: z.literal("DeviceDefinition"),
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
    udiDeviceIdentifier: z
      .array(z.lazy(() => createDeviceDefinitionUdiDeviceIdentifierSchema()))
      .optional(),
    manufacturerString: z.string().optional(),
    _manufacturerString: z.lazy(() => createElementSchema()).optional(),
    manufacturerReference: z.lazy(() => createReferenceSchema()).optional(),
    deviceName: z
      .array(z.lazy(() => createDeviceDefinitionDeviceNameSchema()))
      .optional(),
    modelNumber: primitives.createStringSchema().optional(),
    _modelNumber: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    specialization: z
      .array(z.lazy(() => createDeviceDefinitionSpecializationSchema()))
      .optional(),
    version: z.array(primitives.createStringSchema()).optional(),
    _version: z.array(z.lazy(() => createElementSchema())).optional(),
    safety: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    shelfLifeStorage: z
      .array(z.lazy(() => createProductShelfLifeSchema()))
      .optional(),
    physicalCharacteristics: z
      .lazy(() => createProdCharacteristicSchema())
      .optional(),
    languageCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    capability: z
      .array(z.lazy(() => createDeviceDefinitionCapabilitySchema()))
      .optional(),
    property: z
      .array(z.lazy(() => createDeviceDefinitionPropertySchema()))
      .optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    onlineInformation: primitives.createUriSchema().optional(),
    _onlineInformation: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    parentDevice: z.lazy(() => createReferenceSchema()).optional(),
    material: z
      .array(z.lazy(() => createDeviceDefinitionMaterialSchema()))
      .optional(),
  });

  return baseSchema;
}
