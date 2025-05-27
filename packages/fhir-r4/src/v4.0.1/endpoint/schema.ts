import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Endpoint", () => {
    const baseSchema: z.ZodType<types.Endpoint> = z.strictObject({
      resourceType: z.literal("Endpoint"),
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
      status: z.enum([
        "active",
        "suspended",
        "error",
        "off",
        "entered-in-error",
        "test",
      ]),
      _status: z.lazy(() => createElementSchema()).optional(),
      connectionType: createCodingSchema(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      managingOrganization: createReferenceSchema().optional(),
      contact: z.array(createContactPointSchema()).optional(),
      period: createPeriodSchema().optional(),
      payloadType: z.array(createCodeableConceptSchema()),
      payloadMimeType: z.array(primitives.getCodeSchema()).optional(),
      _payloadMimeType: z.array(z.lazy(() => createElementSchema())).optional(),
      address: primitives.getUrlSchema(),
      _address: z.lazy(() => createElementSchema()).optional(),
      header: z.array(primitives.getStringSchema()).optional(),
      _header: z.array(z.lazy(() => createElementSchema())).optional(),
    });

    return baseSchema;
  });
}
