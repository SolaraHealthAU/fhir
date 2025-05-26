import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventSourceSchema() {
  const baseSchema: z.ZodType<types.AuditEventSource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    site: primitives.createStringSchema().optional(),
    _site: z.lazy(() => createElementSchema()).optional(),
    observer: z.lazy(() => createReferenceSchema()),
    type: z.array(z.lazy(() => createCodingSchema())).optional(),
  });

  return baseSchema;
}
