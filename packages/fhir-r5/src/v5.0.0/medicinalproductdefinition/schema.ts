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
  createCodeableReferenceSchema,
  createCodingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMarketingStatusSchema } from "../marketingstatus/schema";
import { createMedicinalProductDefinitionContactSchema } from "../medicinalproductdefinitioncontact/schema";
import { createMedicinalProductDefinitionNameSchema } from "../medicinalproductdefinitionname/schema";
import { createMedicinalProductDefinitionCrossReferenceSchema } from "../medicinalproductdefinitioncrossreference/schema";
import { createMedicinalProductDefinitionOperationSchema } from "../medicinalproductdefinitionoperation/schema";
import { createMedicinalProductDefinitionCharacteristicSchema } from "../medicinalproductdefinitioncharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createMedicinalProductDefinitionSchema() {
  const baseSchema: z.ZodType<types.MedicinalProductDefinition> = z.object({
    resourceType: z.literal("MedicinalProductDefinition"),
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
    domain: z.lazy(() => createCodeableConceptSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    combinedPharmaceuticalDoseForm: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    route: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    indication: primitives.createMarkdownSchema().optional(),
    _indication: z.lazy(() => createElementSchema()).optional(),
    legalStatusOfSupply: z.lazy(() => createCodeableConceptSchema()).optional(),
    additionalMonitoringIndicator: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    specialMeasures: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    pediatricUseIndicator: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    classification: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    marketingStatus: z
      .array(z.lazy(() => createMarketingStatusSchema()))
      .optional(),
    packagedMedicinalProduct: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    comprisedOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    ingredient: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    impurity: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    attachedDocument: z.array(z.lazy(() => createReferenceSchema())).optional(),
    masterFile: z.array(z.lazy(() => createReferenceSchema())).optional(),
    contact: z
      .array(z.lazy(() => createMedicinalProductDefinitionContactSchema()))
      .optional(),
    clinicalTrial: z.array(z.lazy(() => createReferenceSchema())).optional(),
    code: z.array(z.lazy(() => createCodingSchema())).optional(),
    name: z.array(z.lazy(() => createMedicinalProductDefinitionNameSchema())),
    crossReference: z
      .array(
        z.lazy(() => createMedicinalProductDefinitionCrossReferenceSchema()),
      )
      .optional(),
    operation: z
      .array(z.lazy(() => createMedicinalProductDefinitionOperationSchema()))
      .optional(),
    characteristic: z
      .array(
        z.lazy(() => createMedicinalProductDefinitionCharacteristicSchema()),
      )
      .optional(),
  });

  return baseSchema;
}
