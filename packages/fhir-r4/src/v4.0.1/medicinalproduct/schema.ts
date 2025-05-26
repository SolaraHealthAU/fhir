import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.MedicinalProduct> = z.object({
    resourceType: z.literal("MedicinalProduct"),
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
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    domain: z.lazy(() => createCodingSchema()).optional(),
    combinedPharmaceuticalDoseForm: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    legalStatusOfSupply: z.lazy(() => createCodeableConceptSchema()).optional(),
    additionalMonitoringIndicator: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    specialMeasures: z.array(primitives.createStringSchema()).optional(),
    _specialMeasures: z.array(z.lazy(() => createElementSchema())).optional(),
    paediatricUseIndicator: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    productClassification: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    marketingStatus: z
      .array(z.lazy(() => createMarketingStatusSchema()))
      .optional(),
    pharmaceuticalProduct: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    packagedMedicinalProduct: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    attachedDocument: z.array(z.lazy(() => createReferenceSchema())).optional(),
    masterFile: z.array(z.lazy(() => createReferenceSchema())).optional(),
    contact: z.array(z.lazy(() => createReferenceSchema())).optional(),
    clinicalTrial: z.array(z.lazy(() => createReferenceSchema())).optional(),
    name: z.array(z.lazy(() => createMedicinalProductNameSchema())),
    crossReference: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    manufacturingBusinessOperation: z
      .array(
        z.lazy(() =>
          createMedicinalProductManufacturingBusinessOperationSchema(),
        ),
      )
      .optional(),
    specialDesignation: z
      .array(z.lazy(() => createMedicinalProductSpecialDesignationSchema()))
      .optional(),
  });

  return baseSchema;
}
