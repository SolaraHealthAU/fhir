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
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createPackagedProductDefinitionLegalStatusOfSupplySchema } from "../packagedproductdefinitionlegalstatusofsupply/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createPackagedProductDefinitionPackagingSchema } from "../packagedproductdefinitionpackaging/schema";
import { createPackagedProductDefinitionPropertySchema } from "../packagedproductdefinitionproperty/schema";

/* Generated from FHIR JSON Schema */

export function createPackagedProductDefinitionSchema() {
  const baseSchema: z.ZodType<types.PackagedProductDefinition> = z.object({
    resourceType: z.literal("PackagedProductDefinition"),
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
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    packageFor: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    containedItemQuantity: z
      .array(z.lazy(() => createQuantitySchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    legalStatusOfSupply: z
      .array(
        z.lazy(() =>
          createPackagedProductDefinitionLegalStatusOfSupplySchema(),
        ),
      )
      .optional(),
    marketingStatus: z
      .array(z.lazy(() => createMarketingStatusSchema()))
      .optional(),
    copackagedIndicator: primitives.createBooleanSchema().optional(),
    _copackagedIndicator: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    attachedDocument: z.array(z.lazy(() => createReferenceSchema())).optional(),
    packaging: z
      .lazy(() => createPackagedProductDefinitionPackagingSchema())
      .optional(),
    characteristic: z
      .array(z.lazy(() => createPackagedProductDefinitionPropertySchema()))
      .optional(),
  });

  return baseSchema;
}
