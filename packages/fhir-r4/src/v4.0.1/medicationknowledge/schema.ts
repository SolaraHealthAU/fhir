import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("MedicationKnowledge", () => {
    const baseSchema: z.ZodType<types.MedicationKnowledge> = z.strictObject({
      resourceType: z.literal("MedicationKnowledge"),
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
      code: createCodeableConceptSchema().optional(),
      status: primitives.getCodeSchema().optional(),
      _status: z.lazy(() => createElementSchema()).optional(),
      manufacturer: createReferenceSchema().optional(),
      doseForm: createCodeableConceptSchema().optional(),
      amount: createQuantitySchema().optional(),
      synonym: z.array(primitives.getStringSchema()).optional(),
      _synonym: z.array(z.lazy(() => createElementSchema())).optional(),
      relatedMedicationKnowledge: z
        .array(createMedicationKnowledgeRelatedMedicationKnowledgeSchema())
        .optional(),
      associatedMedication: z.array(createReferenceSchema()).optional(),
      productType: z.array(createCodeableConceptSchema()).optional(),
      monograph: z.array(createMedicationKnowledgeMonographSchema()).optional(),
      ingredient: z
        .array(createMedicationKnowledgeIngredientSchema())
        .optional(),
      preparationInstruction: primitives.getMarkdownSchema().optional(),
      _preparationInstruction: z.lazy(() => createElementSchema()).optional(),
      intendedRoute: z.array(createCodeableConceptSchema()).optional(),
      cost: z.array(createMedicationKnowledgeCostSchema()).optional(),
      monitoringProgram: z
        .array(createMedicationKnowledgeMonitoringProgramSchema())
        .optional(),
      administrationGuidelines: z
        .array(createMedicationKnowledgeAdministrationGuidelinesSchema())
        .optional(),
      medicineClassification: z
        .array(createMedicationKnowledgeMedicineClassificationSchema())
        .optional(),
      packaging: createMedicationKnowledgePackagingSchema().optional(),
      drugCharacteristic: z
        .array(createMedicationKnowledgeDrugCharacteristicSchema())
        .optional(),
      contraindication: z.array(createReferenceSchema()).optional(),
      regulatory: z
        .array(createMedicationKnowledgeRegulatorySchema())
        .optional(),
      kinetics: z.array(createMedicationKnowledgeKineticsSchema()).optional(),
    });

    return baseSchema;
  });
}
