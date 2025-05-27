import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createContactPointSchema,
  createPeriodSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createEndpointPayloadSchema } from "../endpointpayload/schema";

/* Generated from FHIR JSON Schema */

export function createEndpointSchema() {
  const baseSchema: z.ZodType<types.Endpoint> = z.object({
    resourceType: z.literal("Endpoint"),
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
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    connectionType: z.array(z.lazy(() => createCodeableConceptSchema())),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    environmentType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    managingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    payload: z.array(z.lazy(() => createEndpointPayloadSchema())).optional(),
    address: primitives.createUrlSchema().optional(),
    _address: z.lazy(() => createElementSchema()).optional(),
    header: z.array(primitives.createStringSchema()).optional(),
    _header: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
