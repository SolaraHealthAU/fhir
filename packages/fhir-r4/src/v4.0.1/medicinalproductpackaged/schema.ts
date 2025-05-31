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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createMedicinalProductPackagedBatchIdentifierSchema } from "../medicinalproductpackagedbatchidentifier/schema";
import { createMedicinalProductPackagedPackageItemSchema } from "../medicinalproductpackagedpackageitem/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductPackagedSchema() {
  return getCachedSchema("MedicinalProductPackaged", () => {
    const baseSchema: z.ZodType<types.MedicinalProductPackaged> =
      z.strictObject({
        resourceType: z.literal("MedicinalProductPackaged"),
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
        subject: z.array(createReferenceSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        legalStatusOfSupply: createCodeableConceptSchema().optional(),
        marketingStatus: z.array(createMarketingStatusSchema()).optional(),
        marketingAuthorization: createReferenceSchema().optional(),
        manufacturer: z.array(createReferenceSchema()).optional(),
        batchIdentifier: z
          .array(createMedicinalProductPackagedBatchIdentifierSchema())
          .optional(),
        packageItem: z.array(createMedicinalProductPackagedPackageItemSchema()),
      });

    return baseSchema;
  });
}
