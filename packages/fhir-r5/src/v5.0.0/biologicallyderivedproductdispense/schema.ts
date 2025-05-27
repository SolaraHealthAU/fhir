import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createAnnotationSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createBiologicallyDerivedProductDispensePerformerSchema } from "../biologicallyderivedproductdispenseperformer/schema";

/* Generated from FHIR JSON Schema */

export function createBiologicallyDerivedProductDispenseSchema() {
  const baseSchema: z.ZodType<types.BiologicallyDerivedProductDispense> =
    z.object({
      resourceType: z.literal("BiologicallyDerivedProductDispense"),
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
      originRelationshipType: z
        .lazy(() => createCodeableConceptSchema())
        .optional(),
      product: z.lazy(() => createReferenceSchema()),
      patient: z.lazy(() => createReferenceSchema()),
      matchStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
      performer: z
        .array(
          z.lazy(() =>
            createBiologicallyDerivedProductDispensePerformerSchema(),
          ),
        )
        .optional(),
      location: z.lazy(() => createReferenceSchema()).optional(),
      quantity: z.lazy(() => createQuantitySchema()).optional(),
      preparedDate: primitives.createDateTimeSchema().optional(),
      _preparedDate: z.lazy(() => createElementSchema()).optional(),
      whenHandedOver: primitives.createDateTimeSchema().optional(),
      _whenHandedOver: z.lazy(() => createElementSchema()).optional(),
      destination: z.lazy(() => createReferenceSchema()).optional(),
      note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
      usageInstruction: primitives.createStringSchema().optional(),
      _usageInstruction: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
