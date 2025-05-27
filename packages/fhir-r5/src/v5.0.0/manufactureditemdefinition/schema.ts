import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createManufacturedItemDefinitionPropertySchema } from "../manufactureditemdefinitionproperty/schema";
import { createManufacturedItemDefinitionComponentSchema } from "../manufactureditemdefinitioncomponent/schema";

/* Generated from FHIR JSON Schema */

export function createManufacturedItemDefinitionSchema() {
  const baseSchema: z.ZodType<types.ManufacturedItemDefinition> = z.object({
    resourceType: z.literal("ManufacturedItemDefinition"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    manufacturedDoseForm: z.lazy(() => createCodeableConceptSchema()),
    unitOfPresentation: z.lazy(() => createCodeableConceptSchema()).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    marketingStatus: z
      .array(z.lazy(() => createMarketingStatusSchema()))
      .optional(),
    ingredient: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    property: z
      .array(z.lazy(() => createManufacturedItemDefinitionPropertySchema()))
      .optional(),
    component: z
      .array(z.lazy(() => createManufacturedItemDefinitionComponentSchema()))
      .optional(),
  });

  return baseSchema;
}
