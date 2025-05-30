import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createAnnotationSchema,
  createDosageSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createMedicationDispensePerformerSchema } from "../medicationdispenseperformer/schema";
import { createMedicationDispenseSubstitutionSchema } from "../medicationdispensesubstitution/schema";

/* Generated from FHIR JSON Schema */

export function createMedicationDispenseSchema() {
  const baseSchema: z.ZodType<types.MedicationDispense> = z.object({
    resourceType: z.literal("MedicationDispense"),
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
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    notPerformedReason: z
      .lazy(() => createCodeableReferenceSchema())
      .optional(),
    statusChanged: primitives.createDateTimeSchema().optional(),
    _statusChanged: z.lazy(() => createElementSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    medication: z.lazy(() => createCodeableReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    performer: z
      .array(z.lazy(() => createMedicationDispensePerformerSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    authorizingPrescription: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    daysSupply: z.lazy(() => createQuantitySchema()).optional(),
    recorded: primitives.createDateTimeSchema().optional(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    whenPrepared: primitives.createDateTimeSchema().optional(),
    _whenPrepared: z.lazy(() => createElementSchema()).optional(),
    whenHandedOver: primitives.createDateTimeSchema().optional(),
    _whenHandedOver: z.lazy(() => createElementSchema()).optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    receiver: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    renderedDosageInstruction: primitives.createMarkdownSchema().optional(),
    _renderedDosageInstruction: z.lazy(() => createElementSchema()).optional(),
    dosageInstruction: z.array(z.lazy(() => createDosageSchema())).optional(),
    substitution: z
      .lazy(() => createMedicationDispenseSubstitutionSchema())
      .optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
