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
  createPeriodSchema,
  createAgeSchema,
  createRangeSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createProcedurePerformerSchema } from "../procedureperformer/schema";
import { createProcedureFocalDeviceSchema } from "../procedurefocaldevice/schema";

/* Generated from FHIR JSON Schema */

export function createProcedureSchema() {
  const baseSchema: z.ZodType<types.Procedure> = z.object({
    resourceType: z.literal("Procedure"),
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
    instantiatesCanonical: z
      .array(primitives.createCanonicalSchema())
      .optional(),
    instantiatesUri: z.array(primitives.createUriSchema()).optional(),
    _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    subject: z.lazy(() => createReferenceSchema()),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    performedDateTime: z.string().optional(),
    _performedDateTime: z.lazy(() => createElementSchema()).optional(),
    performedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    performedString: z.string().optional(),
    _performedString: z.lazy(() => createElementSchema()).optional(),
    performedAge: z.lazy(() => createAgeSchema()).optional(),
    performedRange: z.lazy(() => createRangeSchema()).optional(),
    recorder: z.lazy(() => createReferenceSchema()).optional(),
    asserter: z.lazy(() => createReferenceSchema()).optional(),
    performer: z
      .array(z.lazy(() => createProcedurePerformerSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    bodySite: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    outcome: z.lazy(() => createCodeableConceptSchema()).optional(),
    report: z.array(z.lazy(() => createReferenceSchema())).optional(),
    complication: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    complicationDetail: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    followUp: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    focalDevice: z
      .array(z.lazy(() => createProcedureFocalDeviceSchema()))
      .optional(),
    usedReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    usedCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
