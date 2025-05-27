import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementEndpointSchema() {
  const baseSchema: z.ZodType<types.CapabilityStatementEndpoint> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    protocol: z.lazy(() => createCodingSchema()),
    address: primitives.createUrlSchema().optional(),
    _address: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
