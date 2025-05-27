import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
  createRelatedArtifactSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationKnowledgeRelatedMedicationKnowledgeSchema } from "../medicationknowledgerelatedmedicationknowledge/schema";
import { createMedicationKnowledgeMonographSchema } from "../medicationknowledgemonograph/schema";
import { createMedicationKnowledgeCostSchema } from "../medicationknowledgecost/schema";
import { createMedicationKnowledgeMonitoringProgramSchema } from "../medicationknowledgemonitoringprogram/schema";
import { createMedicationKnowledgeIndicationGuidelineSchema } from "../medicationknowledgeindicationguideline/schema";
import { createMedicationKnowledgeMedicineClassificationSchema } from "../medicationknowledgemedicineclassification/schema";
import { createMedicationKnowledgePackagingSchema } from "../medicationknowledgepackaging/schema";
import { createMedicationKnowledgeStorageGuidelineSchema } from "../medicationknowledgestorageguideline/schema";
import { createMedicationKnowledgeRegulatorySchema } from "../medicationknowledgeregulatory/schema";
import { createMedicationKnowledgeDefinitionalSchema } from "../medicationknowledgedefinitional/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationKnowledgeSchema() {
  const baseSchema: z.ZodType<types.MedicationKnowledge> = z.object({
    resourceType: z.literal("MedicationKnowledge"),
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
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmString: z.string().optional(),
    _versionAlgorithmString: z.lazy(() => createElementSchema()).optional(),
    versionAlgorithmCoding: z.lazy(() => createCodingSchema()).optional(),
    name: z.array(primitives.createStringSchema()).optional(),
    _name: z.array(z.lazy(() => createElementSchema())).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    experimental: primitives.createBooleanSchema().optional(),
    _experimental: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    publisher: primitives.createStringSchema().optional(),
    _publisher: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    useContext: z.array(z.lazy(() => createUsageContextSchema())).optional(),
    jurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    purpose: primitives.createMarkdownSchema().optional(),
    _purpose: z.lazy(() => createElementSchema()).optional(),
    copyright: primitives.createMarkdownSchema().optional(),
    _copyright: z.lazy(() => createElementSchema()).optional(),
    copyrightLabel: primitives.createStringSchema().optional(),
    _copyrightLabel: z.lazy(() => createElementSchema()).optional(),
    approvalDate: primitives.createDateSchema().optional(),
    _approvalDate: z.lazy(() => createElementSchema()).optional(),
    lastReviewDate: primitives.createDateSchema().optional(),
    _lastReviewDate: z.lazy(() => createElementSchema()).optional(),
    effectivePeriod: z.lazy(() => createPeriodSchema()).optional(),
    topic: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    author: z.lazy(() => createReferenceSchema()).optional(),
    editor: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    reviewer: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    endorser: z.array(z.lazy(() => createContactDetailSchema())).optional(),
    relatedArtifact: z
      .array(z.lazy(() => createRelatedArtifactSchema()))
      .optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    intendedJurisdiction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    relatedMedicationKnowledge: z
      .array(
        z.lazy(() =>
          createMedicationKnowledgeRelatedMedicationKnowledgeSchema(),
        ),
      )
      .optional(),
    associatedMedication: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    productType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    monograph: z
      .array(z.lazy(() => createMedicationKnowledgeMonographSchema()))
      .optional(),
    preparationInstruction: primitives.createMarkdownSchema().optional(),
    _preparationInstruction: z.lazy(() => createElementSchema()).optional(),
    cost: z
      .array(z.lazy(() => createMedicationKnowledgeCostSchema()))
      .optional(),
    monitoringProgram: z
      .array(z.lazy(() => createMedicationKnowledgeMonitoringProgramSchema()))
      .optional(),
    indicationGuideline: z
      .array(z.lazy(() => createMedicationKnowledgeIndicationGuidelineSchema()))
      .optional(),
    medicineClassification: z
      .array(
        z.lazy(() => createMedicationKnowledgeMedicineClassificationSchema()),
      )
      .optional(),
    packaging: z
      .array(z.lazy(() => createMedicationKnowledgePackagingSchema()))
      .optional(),
    clinicalUseIssue: z.array(z.lazy(() => createReferenceSchema())).optional(),
    storageGuideline: z
      .array(z.lazy(() => createMedicationKnowledgeStorageGuidelineSchema()))
      .optional(),
    regulatory: z
      .array(z.lazy(() => createMedicationKnowledgeRegulatorySchema()))
      .optional(),
    definitional: z
      .lazy(() => createMedicationKnowledgeDefinitionalSchema())
      .optional(),
  });

  return baseSchema;
}
