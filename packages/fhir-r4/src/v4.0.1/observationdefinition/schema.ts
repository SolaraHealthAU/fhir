import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ObservationDefinition", () => {
    const baseSchema: z.ZodType<types.ObservationDefinition> = z.strictObject({
      resourceType: z.literal("ObservationDefinition"),
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
      category: z.array(createCodeableConceptSchema()).optional(),
      code: createCodeableConceptSchema(),
      identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
      permittedDataType: z.array(z.any()).optional(),
      _permittedDataType: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      multipleResultsAllowed: primitives.getBooleanSchema().optional(),
      _multipleResultsAllowed: z.lazy(() => createElementSchema()).optional(),
      method: createCodeableConceptSchema().optional(),
      preferredReportName: primitives.getStringSchema().optional(),
      _preferredReportName: z.lazy(() => createElementSchema()).optional(),
      quantitativeDetails:
        createObservationDefinitionQuantitativeDetailsSchema().optional(),
      qualifiedInterval: z
        .array(createObservationDefinitionQualifiedIntervalSchema())
        .optional(),
      validCodedValueSet: createReferenceSchema().optional(),
      normalCodedValueSet: createReferenceSchema().optional(),
      abnormalCodedValueSet: createReferenceSchema().optional(),
      criticalCodedValueSet: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
