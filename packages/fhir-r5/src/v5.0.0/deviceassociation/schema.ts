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
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createDeviceAssociationOperationSchema } from "../deviceassociationoperation/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceAssociationSchema() {
  const baseSchema: z.ZodType<types.DeviceAssociation> = z.object({
    resourceType: z.literal("DeviceAssociation"),
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
    device: z.lazy(() => createReferenceSchema()),
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    status: z.lazy(() => createCodeableConceptSchema()),
    statusReason: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    subject: z.lazy(() => createReferenceSchema()).optional(),
    bodyStructure: z.lazy(() => createReferenceSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    operation: z
      .array(z.lazy(() => createDeviceAssociationOperationSchema()))
      .optional(),
  });

  return baseSchema;
}
