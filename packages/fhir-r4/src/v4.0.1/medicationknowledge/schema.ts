import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationKnowledgeRelatedMedicationKnowledgeSchema } from "../medicationknowledgerelatedmedicationknowledge/schema";
import { createMedicationKnowledgeMonographSchema } from "../medicationknowledgemonograph/schema";
import { createMedicationKnowledgeIngredientSchema } from "../medicationknowledgeingredient/schema";
import { createMedicationKnowledgeCostSchema } from "../medicationknowledgecost/schema";
import { createMedicationKnowledgeMonitoringProgramSchema } from "../medicationknowledgemonitoringprogram/schema";
import { createMedicationKnowledgeAdministrationGuidelinesSchema } from "../medicationknowledgeadministrationguidelines/schema";
import { createMedicationKnowledgeMedicineClassificationSchema } from "../medicationknowledgemedicineclassification/schema";
import { createMedicationKnowledgePackagingSchema } from "../medicationknowledgepackaging/schema";
import { createMedicationKnowledgeDrugCharacteristicSchema } from "../medicationknowledgedrugcharacteristic/schema";
import { createMedicationKnowledgeRegulatorySchema } from "../medicationknowledgeregulatory/schema";
import { createMedicationKnowledgeKineticsSchema } from "../medicationknowledgekinetics/schema";

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
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    manufacturer: z.lazy(() => createReferenceSchema()).optional(),
    doseForm: z.lazy(() => createCodeableConceptSchema()).optional(),
    amount: z.lazy(() => createQuantitySchema()).optional(),
    synonym: z.array(primitives.createStringSchema()).optional(),
    _synonym: z.array(z.lazy(() => createElementSchema())).optional(),
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
    ingredient: z
      .array(z.lazy(() => createMedicationKnowledgeIngredientSchema()))
      .optional(),
    preparationInstruction: primitives.createMarkdownSchema().optional(),
    _preparationInstruction: z.lazy(() => createElementSchema()).optional(),
    intendedRoute: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    cost: z
      .array(z.lazy(() => createMedicationKnowledgeCostSchema()))
      .optional(),
    monitoringProgram: z
      .array(z.lazy(() => createMedicationKnowledgeMonitoringProgramSchema()))
      .optional(),
    administrationGuidelines: z
      .array(
        z.lazy(() => createMedicationKnowledgeAdministrationGuidelinesSchema()),
      )
      .optional(),
    medicineClassification: z
      .array(
        z.lazy(() => createMedicationKnowledgeMedicineClassificationSchema()),
      )
      .optional(),
    packaging: z
      .lazy(() => createMedicationKnowledgePackagingSchema())
      .optional(),
    drugCharacteristic: z
      .array(z.lazy(() => createMedicationKnowledgeDrugCharacteristicSchema()))
      .optional(),
    contraindication: z.array(z.lazy(() => createReferenceSchema())).optional(),
    regulatory: z
      .array(z.lazy(() => createMedicationKnowledgeRegulatorySchema()))
      .optional(),
    kinetics: z
      .array(z.lazy(() => createMedicationKnowledgeKineticsSchema()))
      .optional(),
  });

  return baseSchema;
}
