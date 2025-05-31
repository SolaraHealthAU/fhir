import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementEndpointSchema() {
  return getCachedSchema("CapabilityStatementEndpoint", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementEndpoint> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        protocol: createCodingSchema(),
        address: primitives.getUrlSchema().optional(),
        _address: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
