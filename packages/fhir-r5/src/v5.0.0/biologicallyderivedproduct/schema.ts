import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodingSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createIdentifierSchema,
  createRangeSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createBiologicallyDerivedProductCollectionSchema } from "../biologicallyderivedproductcollection/schema";
import { createBiologicallyDerivedProductPropertySchema } from "../biologicallyderivedproductproperty/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductSchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProduct> = z.object({
    resourceType: z.literal("BiologicallyDerivedProduct"),
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
    productCategory: z.lazy(() => createCodingSchema()).optional(),
    productCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    parent: z.array(z.lazy(() => createReferenceSchema())).optional(),
    request: z.array(z.lazy(() => createReferenceSchema())).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    biologicalSourceEvent: z.lazy(() => createIdentifierSchema()).optional(),
    processingFacility: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    division: primitives.createStringSchema().optional(),
    _division: z.lazy(() => createElementSchema()).optional(),
    productStatus: z.lazy(() => createCodingSchema()).optional(),
    expirationDate: primitives.createDateTimeSchema().optional(),
    _expirationDate: z.lazy(() => createElementSchema()).optional(),
    collection: z
      .lazy(() => createBiologicallyDerivedProductCollectionSchema())
      .optional(),
    storageTempRequirements: z.lazy(() => createRangeSchema()).optional(),
    property: z
      .array(z.lazy(() => createBiologicallyDerivedProductPropertySchema()))
      .optional(),
  });

  return baseSchema;
}
