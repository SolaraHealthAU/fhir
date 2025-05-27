import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventSourceSchema() {
  return getCachedSchema("AuditEventSource", () => {
    const baseSchema: z.ZodType<types.AuditEventSource> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      site: primitives.getStringSchema().optional(),
      _site: z.lazy(() => createElementSchema()).optional(),
      observer: createReferenceSchema(),
      type: z.array(createCodingSchema()).optional(),
    });

    return baseSchema;
  });
}
