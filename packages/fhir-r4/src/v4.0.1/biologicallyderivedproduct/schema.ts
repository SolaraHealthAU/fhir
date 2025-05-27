import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("BiologicallyDerivedProduct", () => {
    const baseSchema: z.ZodType<types.BiologicallyDerivedProduct> =
      z.strictObject({
        resourceType: z.literal("BiologicallyDerivedProduct"),
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
        productCategory: z
          .enum(["organ", "tissue", "fluid", "cells", "biologicalAgent"])
          .optional(),
        _productCategory: z.lazy(() => createElementSchema()).optional(),
        productCode: createCodeableConceptSchema().optional(),
        status: z.enum(["available", "unavailable"]).optional(),
        _status: z.lazy(() => createElementSchema()).optional(),
        request: z.array(createReferenceSchema()).optional(),
        quantity: primitives.getIntegerSchema().optional(),
        _quantity: z.lazy(() => createElementSchema()).optional(),
        parent: z.array(createReferenceSchema()).optional(),
        collection:
          createBiologicallyDerivedProductCollectionSchema().optional(),
        processing: z
          .array(createBiologicallyDerivedProductProcessingSchema())
          .optional(),
        manipulation:
          createBiologicallyDerivedProductManipulationSchema().optional(),
        storage: z
          .array(createBiologicallyDerivedProductStorageSchema())
          .optional(),
      });

    return baseSchema;
  });
}
