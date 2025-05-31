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
  return getCachedSchema("DeviceDefinition", () => {
    const baseSchema: z.ZodType<types.DeviceDefinition> = z.strictObject({
      resourceType: z.literal("DeviceDefinition"),
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
      udiDeviceIdentifier: z
        .array(createDeviceDefinitionUdiDeviceIdentifierSchema())
        .optional(),
      manufacturerString: z.string().optional(),
      _manufacturerString: createElementSchema().optional(),
      manufacturerReference: createReferenceSchema().optional(),
      deviceName: z.array(createDeviceDefinitionDeviceNameSchema()).optional(),
      modelNumber: primitives.getStringSchema().optional(),
      _modelNumber: createElementSchema().optional(),
      type: createCodeableConceptSchema().optional(),
      specialization: z
        .array(createDeviceDefinitionSpecializationSchema())
        .optional(),
      version: z.array(primitives.getStringSchema()).optional(),
      _version: z.array(createElementSchema()).optional(),
      safety: z.array(createCodeableConceptSchema()).optional(),
      shelfLifeStorage: z.array(createProductShelfLifeSchema()).optional(),
      physicalCharacteristics: createProdCharacteristicSchema().optional(),
      languageCode: z.array(createCodeableConceptSchema()).optional(),
      capability: z.array(createDeviceDefinitionCapabilitySchema()).optional(),
      property: z.array(createDeviceDefinitionPropertySchema()).optional(),
      owner: createReferenceSchema().optional(),
      contact: z.array(createContactPointSchema()).optional(),
      url: primitives.getUriSchema().optional(),
      _url: createElementSchema().optional(),
      onlineInformation: primitives.getUriSchema().optional(),
      _onlineInformation: createElementSchema().optional(),
      note: z.array(createAnnotationSchema()).optional(),
      quantity: createQuantitySchema().optional(),
      parentDevice: createReferenceSchema().optional(),
      material: z.array(createDeviceDefinitionMaterialSchema()).optional(),
    });

    return baseSchema;
  });
}
