import { z } from "zod/v4";
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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceDefinitionUdiDeviceIdentifierSchema } from "../devicedefinitionudideviceidentifier/schema";
import { createDeviceDefinitionRegulatoryIdentifierSchema } from "../devicedefinitionregulatoryidentifier/schema";
import { createDeviceDefinitionDeviceNameSchema } from "../devicedefinitiondevicename/schema";
import { createDeviceDefinitionClassificationSchema } from "../devicedefinitionclassification/schema";
import { createDeviceDefinitionConformsToSchema } from "../devicedefinitionconformsto/schema";
import { createDeviceDefinitionHasPartSchema } from "../devicedefinitionhaspart/schema";
import { createDeviceDefinitionPackagingSchema } from "../devicedefinitionpackaging/schema";
import { createDeviceDefinitionVersionSchema } from "../devicedefinitionversion/schema";
import { createProductShelfLifeSchema } from "../productshelflife/schema";
import { createDeviceDefinitionPropertySchema } from "../devicedefinitionproperty/schema";
import { createDeviceDefinitionLinkSchema } from "../devicedefinitionlink/schema";
import { createDeviceDefinitionMaterialSchema } from "../devicedefinitionmaterial/schema";
import { createDeviceDefinitionGuidelineSchema } from "../devicedefinitionguideline/schema";
import { createDeviceDefinitionCorrectiveActionSchema } from "../devicedefinitioncorrectiveaction/schema";
import { createDeviceDefinitionChargeItemSchema } from "../devicedefinitionchargeitem/schema";

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
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    udiDeviceIdentifier: z
      .array(z.lazy(() => createDeviceDefinitionUdiDeviceIdentifierSchema()))
      .optional(),
    regulatoryIdentifier: z
      .array(z.lazy(() => createDeviceDefinitionRegulatoryIdentifierSchema()))
      .optional(),
    partNumber: primitives.createStringSchema().optional(),
    _partNumber: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.lazy(() => createReferenceSchema()).optional(),
    deviceName: z
      .array(z.lazy(() => createDeviceDefinitionDeviceNameSchema()))
      .optional(),
    modelNumber: primitives.createStringSchema().optional(),
    _modelNumber: z.lazy(() => createElementSchema()).optional(),
    classification: z
      .array(z.lazy(() => createDeviceDefinitionClassificationSchema()))
      .optional(),
    conformsTo: z
      .array(z.lazy(() => createDeviceDefinitionConformsToSchema()))
      .optional(),
    hasPart: z
      .array(z.lazy(() => createDeviceDefinitionHasPartSchema()))
      .optional(),
    packaging: z
      .array(z.lazy(() => createDeviceDefinitionPackagingSchema()))
      .optional(),
    version: z
      .array(z.lazy(() => createDeviceDefinitionVersionSchema()))
      .optional(),
    safety: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    shelfLifeStorage: z
      .array(z.lazy(() => createProductShelfLifeSchema()))
      .optional(),
    languageCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    property: z
      .array(z.lazy(() => createDeviceDefinitionPropertySchema()))
      .optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    link: z.array(z.lazy(() => createDeviceDefinitionLinkSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    material: z
      .array(z.lazy(() => createDeviceDefinitionMaterialSchema()))
      .optional(),
    productionIdentifierInUDI: z
      .array(primitives.createCodeSchema())
      .optional(),
    _productionIdentifierInUDI: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    guideline: z.lazy(() => createDeviceDefinitionGuidelineSchema()).optional(),
    correctiveAction: z
      .lazy(() => createDeviceDefinitionCorrectiveActionSchema())
      .optional(),
    chargeItem: z
      .array(z.lazy(() => createDeviceDefinitionChargeItemSchema()))
      .optional(),
  });

  return baseSchema;
}
