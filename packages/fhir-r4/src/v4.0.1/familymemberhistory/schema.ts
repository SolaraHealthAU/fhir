import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createAgeSchema,
  createRangeSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createFamilyMemberHistoryConditionSchema } from "../familymemberhistorycondition/schema";

/* Generated from FHIR JSON Schema */

export function createFamilyMemberHistorySchema() {
  const baseSchema: z.ZodType<types.FamilyMemberHistory> = z.object({
    resourceType: z.literal("FamilyMemberHistory"),
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
    status: z.enum([
      "partial",
      "completed",
      "entered-in-error",
      "health-unknown",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    dataAbsentReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    patient: z.lazy(() => createReferenceSchema()),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    relationship: z.lazy(() => createCodeableConceptSchema()),
    sex: z.lazy(() => createCodeableConceptSchema()).optional(),
    bornPeriod: z.lazy(() => createPeriodSchema()).optional(),
    bornDate: z.string().optional(),
    _bornDate: z.lazy(() => createElementSchema()).optional(),
    bornString: z.string().optional(),
    _bornString: z.lazy(() => createElementSchema()).optional(),
    ageAge: z.lazy(() => createAgeSchema()).optional(),
    ageRange: z.lazy(() => createRangeSchema()).optional(),
    ageString: z.string().optional(),
    _ageString: z.lazy(() => createElementSchema()).optional(),
    estimatedAge: primitives.createBooleanSchema().optional(),
    _estimatedAge: z.lazy(() => createElementSchema()).optional(),
    deceasedBoolean: z.boolean().optional(),
    _deceasedBoolean: z.lazy(() => createElementSchema()).optional(),
    deceasedAge: z.lazy(() => createAgeSchema()).optional(),
    deceasedRange: z.lazy(() => createRangeSchema()).optional(),
    deceasedDate: z.string().optional(),
    _deceasedDate: z.lazy(() => createElementSchema()).optional(),
    deceasedString: z.string().optional(),
    _deceasedString: z.lazy(() => createElementSchema()).optional(),
    reasonCode: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    reasonReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    condition: z
      .array(z.lazy(() => createFamilyMemberHistoryConditionSchema()))
      .optional(),
  });

  return baseSchema;
}
