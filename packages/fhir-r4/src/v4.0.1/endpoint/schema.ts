import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createReferenceSchema,
  createContactPointSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

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
    status: z.enum([
      "active",
      "suspended",
      "error",
      "off",
      "entered-in-error",
      "test",
    ]),
    _status: z.lazy(() => createElementSchema()).optional(),
    connectionType: z.lazy(() => createCodingSchema()),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    managingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    contact: z.array(z.lazy(() => createContactPointSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    payloadType: z.array(z.lazy(() => createCodeableConceptSchema())),
    payloadMimeType: z.array(primitives.createCodeSchema()).optional(),
    _payloadMimeType: z.array(z.lazy(() => createElementSchema())).optional(),
    address: primitives.createUrlSchema(),
    _address: z.lazy(() => createElementSchema()).optional(),
    header: z.array(primitives.createStringSchema()).optional(),
    _header: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
