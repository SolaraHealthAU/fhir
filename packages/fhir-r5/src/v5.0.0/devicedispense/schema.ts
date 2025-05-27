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
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceDispensePerformerSchema } from "../devicedispenseperformer/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceDispenseSchema() {
  const baseSchema: z.ZodType<types.DeviceDispense> = z.object({
    resourceType: z.literal("DeviceDispense"),
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
    statusReason: z.lazy(() => createCodeableReferenceSchema()).optional(),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    device: z.lazy(() => createCodeableReferenceSchema()),
    subject: z.lazy(() => createReferenceSchema()),
    receiver: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    supportingInformation: z
      .array(z.lazy(() => createReferenceSchema()))
      .optional(),
    performer: z
      .array(z.lazy(() => createDeviceDispensePerformerSchema()))
      .optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    preparedDate: primitives.createDateTimeSchema().optional(),
    _preparedDate: z.lazy(() => createElementSchema()).optional(),
    whenHandedOver: primitives.createDateTimeSchema().optional(),
    _whenHandedOver: z.lazy(() => createElementSchema()).optional(),
    destination: z.lazy(() => createReferenceSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    usageInstruction: primitives.createMarkdownSchema().optional(),
    _usageInstruction: z.lazy(() => createElementSchema()).optional(),
    eventHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
