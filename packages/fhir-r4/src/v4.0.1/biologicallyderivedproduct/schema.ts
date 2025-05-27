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
import { createBiologicallyDerivedProductCollectionSchema } from "../biologicallyderivedproductcollection/schema";
import { createBiologicallyDerivedProductProcessingSchema } from "../biologicallyderivedproductprocessing/schema";
import { createBiologicallyDerivedProductManipulationSchema } from "../biologicallyderivedproductmanipulation/schema";
import { createBiologicallyDerivedProductStorageSchema } from "../biologicallyderivedproductstorage/schema";

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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    productCategory: z
      .enum(["organ", "tissue", "fluid", "cells", "biologicalAgent"])
      .optional(),
    _productCategory: z.lazy(() => createElementSchema()).optional(),
    productCode: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.enum(["available", "unavailable"]).optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    request: z.array(z.lazy(() => createReferenceSchema())).optional(),
    quantity: primitives.createIntegerSchema().optional(),
    _quantity: z.lazy(() => createElementSchema()).optional(),
    parent: z.array(z.lazy(() => createReferenceSchema())).optional(),
    collection: z
      .lazy(() => createBiologicallyDerivedProductCollectionSchema())
      .optional(),
    processing: z
      .array(z.lazy(() => createBiologicallyDerivedProductProcessingSchema()))
      .optional(),
    manipulation: z
      .lazy(() => createBiologicallyDerivedProductManipulationSchema())
      .optional(),
    storage: z
      .array(z.lazy(() => createBiologicallyDerivedProductStorageSchema()))
      .optional(),
  });

  return baseSchema;
}
