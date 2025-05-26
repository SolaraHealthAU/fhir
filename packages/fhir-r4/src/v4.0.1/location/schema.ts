import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodingSchema,
  createCodeableConceptSchema,
  createContactPointSchema,
  createAddressSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createLocationPositionSchema } from "../locationposition/schema";
import { createLocationHoursOfOperationSchema } from "../locationhoursofoperation/schema";

/* Generated from FHIR JSON Schema */

export function createLocationSchema() {
  const baseSchema: z.ZodType<types.Location> = z.object({
    resourceType: z.literal("Location"),
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
    status: z.enum(["active", "suspended", "inactive"]).optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    operationalStatus: z.lazy(() => createCodingSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    alias: z.array(primitives.createStringSchema()).optional(),
    _alias: z.array(z.lazy(() => createElementSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    mode: z.enum(["instance", "kind"]).optional(),
    _mode: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    address: z.lazy(() => createAddressSchema()).optional(),
    physicalType: z.lazy(() => createCodeableConceptSchema()).optional(),
    position: z.lazy(() => createLocationPositionSchema()).optional(),
    managingOrganization: z.lazy(() => createReferenceSchema()).optional(),
    partOf: z.lazy(() => createReferenceSchema()).optional(),
    hoursOfOperation: z
      .array(z.lazy(() => createLocationHoursOfOperationSchema()))
      .optional(),
    availabilityExceptions: primitives.createStringSchema().optional(),
    _availabilityExceptions: z.lazy(() => createElementSchema()).optional(),
    endpoint: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
