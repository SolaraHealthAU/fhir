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
  return getCachedSchema("Location", () => {
    const baseSchema: z.ZodType<types.Location> = z.strictObject({
      resourceType: z.literal("Location"),
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
      identifier: z.array(createIdentifierSchema()).optional(),
      status: z.enum(["active", "suspended", "inactive"]).optional(),
      _status: createElementSchema().optional(),
      operationalStatus: createCodingSchema().optional(),
      name: primitives.getStringSchema().optional(),
      _name: createElementSchema().optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      mode: z.enum(["instance", "kind"]).optional(),
      _mode: createElementSchema().optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
      address: createAddressSchema().optional(),
      physicalType: createCodeableConceptSchema().optional(),
      position: createLocationPositionSchema().optional(),
      managingOrganization: createReferenceSchema().optional(),
      partOf: createReferenceSchema().optional(),
      hoursOfOperation: z
        .array(createLocationHoursOfOperationSchema())
        .optional(),
      availabilityExceptions: primitives.getStringSchema().optional(),
      _availabilityExceptions: createElementSchema().optional(),
      endpoint: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
