import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createChargeItemDefinitionApplicabilitySchema } from "../chargeitemdefinitionapplicability/schema";
import { createChargeItemDefinitionPropertyGroupSchema } from "../chargeitemdefinitionpropertygroup/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionSchema() {
  return getCachedSchema("ChargeItemDefinition", () => {
    const baseSchema: z.ZodType<types.ChargeItemDefinition> = z.strictObject({
      resourceType: z.literal("ChargeItemDefinition"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      url: primitives.getUriSchema(),
      _url: createElementSchema().optional(),
      identifier: z.array(createIdentifierSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: createElementSchema().optional(),
      title: primitives.getStringSchema().optional(),
      _title: createElementSchema().optional(),
      derivedFromUri: z.array(primitives.getUriSchema()).optional(),
      _derivedFromUri: z.array(createElementSchema()).optional(),
      partOf: z.array(primitives.getCanonicalSchema()).optional(),
      replaces: z.array(primitives.getCanonicalSchema()).optional(),
      status: z.enum(["draft", "active", "retired", "unknown"]),
      _status: createElementSchema().optional(),
      experimental: primitives.getBooleanSchema().optional(),
      _experimental: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      publisher: primitives.getStringSchema().optional(),
      _publisher: createElementSchema().optional(),
      contact: z.array(createContactDetailSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: createElementSchema().optional(),
      useContext: z.array(createUsageContextSchema()).optional(),
      jurisdiction: z.array(createCodeableConceptSchema()).optional(),
      copyright: primitives.getMarkdownSchema().optional(),
      _copyright: createElementSchema().optional(),
      approvalDate: primitives.getDateSchema().optional(),
      _approvalDate: createElementSchema().optional(),
      lastReviewDate: primitives.getDateSchema().optional(),
      _lastReviewDate: createElementSchema().optional(),
      effectivePeriod: createPeriodSchema().optional(),
      code: createCodeableConceptSchema().optional(),
      instance: z.array(createReferenceSchema()).optional(),
      applicability: z
        .array(createChargeItemDefinitionApplicabilitySchema())
        .optional(),
      propertyGroup: z
        .array(createChargeItemDefinitionPropertyGroupSchema())
        .optional(),
    });

    return baseSchema;
  });
}
