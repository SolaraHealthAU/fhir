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
  createCodingSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createMedicinalProductNameSchema } from "../medicinalproductname/schema";
import { createMedicinalProductManufacturingBusinessOperationSchema } from "../medicinalproductmanufacturingbusinessoperation/schema";
import { createMedicinalProductSpecialDesignationSchema } from "../medicinalproductspecialdesignation/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductSchema() {
  return getCachedSchema("MedicinalProduct", () => {
    const baseSchema: z.ZodType<types.MedicinalProduct> = z.strictObject({
      resourceType: z.literal("MedicinalProduct"),
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
      type: createCodeableConceptSchema().optional(),
      domain: createCodingSchema().optional(),
      combinedPharmaceuticalDoseForm: createCodeableConceptSchema().optional(),
      legalStatusOfSupply: createCodeableConceptSchema().optional(),
      additionalMonitoringIndicator: createCodeableConceptSchema().optional(),
      specialMeasures: z.array(primitives.getStringSchema()).optional(),
      _specialMeasures: z.array(z.lazy(() => createElementSchema())).optional(),
      paediatricUseIndicator: createCodeableConceptSchema().optional(),
      productClassification: z.array(createCodeableConceptSchema()).optional(),
      marketingStatus: z.array(createMarketingStatusSchema()).optional(),
      pharmaceuticalProduct: z.array(createReferenceSchema()).optional(),
      packagedMedicinalProduct: z.array(createReferenceSchema()).optional(),
      attachedDocument: z.array(createReferenceSchema()).optional(),
      masterFile: z.array(createReferenceSchema()).optional(),
      contact: z.array(createReferenceSchema()).optional(),
      clinicalTrial: z.array(createReferenceSchema()).optional(),
      name: z.array(createMedicinalProductNameSchema()),
      crossReference: z
        .array(z.lazy(() => createIdentifierSchema()))
        .optional(),
      manufacturingBusinessOperation: z
        .array(createMedicinalProductManufacturingBusinessOperationSchema())
        .optional(),
      specialDesignation: z
        .array(createMedicinalProductSpecialDesignationSchema())
        .optional(),
    });

    return baseSchema;
  });
}
