import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createObservationDefinitionQuantitativeDetailsSchema } from "../observationdefinitionquantitativedetails/schema";
import { createObservationDefinitionQualifiedIntervalSchema } from "../observationdefinitionqualifiedinterval/schema";

/* Generated from FHIR JSON Schema */

export function createObservationDefinitionSchema() {
  const baseSchema: z.ZodType<types.ObservationDefinition> = z.object({
    resourceType: z.literal("ObservationDefinition"),
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
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    permittedDataType: z.array(z.any()).optional(),
    _permittedDataType: z.array(z.lazy(() => createElementSchema())).optional(),
    multipleResultsAllowed: primitives.createBooleanSchema().optional(),
    _multipleResultsAllowed: z.lazy(() => createElementSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    preferredReportName: primitives.createStringSchema().optional(),
    _preferredReportName: z.lazy(() => createElementSchema()).optional(),
    quantitativeDetails: z
      .lazy(() => createObservationDefinitionQuantitativeDetailsSchema())
      .optional(),
    qualifiedInterval: z
      .array(z.lazy(() => createObservationDefinitionQualifiedIntervalSchema()))
      .optional(),
    validCodedValueSet: z.lazy(() => createReferenceSchema()).optional(),
    normalCodedValueSet: z.lazy(() => createReferenceSchema()).optional(),
    abnormalCodedValueSet: z.lazy(() => createReferenceSchema()).optional(),
    criticalCodedValueSet: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
