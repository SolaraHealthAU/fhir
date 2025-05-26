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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createMedicinalProductPackagedBatchIdentifierSchema } from "../medicinalproductpackagedbatchidentifier/schema";
import { createMedicinalProductPackagedPackageItemSchema } from "../medicinalproductpackagedpackageitem/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPackagedSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductPackaged> = z.object({
    resourceType: z.literal("MedicinalProductPackaged"),
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
    subject: z.array(z.lazy(() => createReferenceSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    legalStatusOfSupply: z.lazy(() => createCodeableConceptSchema()).optional(),
    marketingStatus: z
      .array(z.lazy(() => createMarketingStatusSchema()))
      .optional(),
    marketingAuthorization: z.lazy(() => createReferenceSchema()).optional(),
    manufacturer: z.array(z.lazy(() => createReferenceSchema())).optional(),
    batchIdentifier: z
      .array(
        z.lazy(() => createMedicinalProductPackagedBatchIdentifierSchema()),
      )
      .optional(),
    packageItem: z.array(
      z.lazy(() => createMedicinalProductPackagedPackageItemSchema()),
    ),
  });

  return baseSchema;
}
