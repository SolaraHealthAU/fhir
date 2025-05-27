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
  return getCachedSchema("FamilyMemberHistory", () => {
    const baseSchema: z.ZodType<types.FamilyMemberHistory> = z.strictObject({
      resourceType: z.literal("FamilyMemberHistory"),
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
      instantiatesCanonical: z
        .array(primitives.getCanonicalSchema())
        .optional(),
      instantiatesUri: z.array(primitives.getUriSchema()).optional(),
      _instantiatesUri: z.array(z.lazy(() => createElementSchema())).optional(),
      status: z.enum([
        "partial",
        "completed",
        "entered-in-error",
        "health-unknown",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      dataAbsentReason: createCodeableConceptSchema().optional(),
      patient: createReferenceSchema(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      relationship: createCodeableConceptSchema(),
      sex: createCodeableConceptSchema().optional(),
      bornPeriod: createPeriodSchema().optional(),
      bornDate: z.string().optional(),
      _bornDate: z.lazy(() => createElementSchema()).optional(),
      bornString: z.string().optional(),
      _bornString: z.lazy(() => createElementSchema()).optional(),
      ageAge: createAgeSchema().optional(),
      ageRange: createRangeSchema().optional(),
      ageString: z.string().optional(),
      _ageString: z.lazy(() => createElementSchema()).optional(),
      estimatedAge: primitives.getBooleanSchema().optional(),
      _estimatedAge: z.lazy(() => createElementSchema()).optional(),
      deceasedBoolean: z.boolean().optional(),
      _deceasedBoolean: z.lazy(() => createElementSchema()).optional(),
      deceasedAge: createAgeSchema().optional(),
      deceasedRange: createRangeSchema().optional(),
      deceasedDate: z.string().optional(),
      _deceasedDate: z.lazy(() => createElementSchema()).optional(),
      deceasedString: z.string().optional(),
      _deceasedString: z.lazy(() => createElementSchema()).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      condition: z.array(createFamilyMemberHistoryConditionSchema()).optional(),
    });

    return baseSchema;
  });
}
