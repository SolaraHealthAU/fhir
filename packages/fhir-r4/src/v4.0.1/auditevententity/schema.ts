import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";
import { createAuditEventDetailSchema } from "../auditeventdetail/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventEntitySchema() {
  const baseSchema: z.ZodType<types.AuditEventEntity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    what: z.lazy(() => createReferenceSchema()).optional(),
    type: z.lazy(() => createCodingSchema()).optional(),
    role: z.lazy(() => createCodingSchema()).optional(),
    lifecycle: z.lazy(() => createCodingSchema()).optional(),
    securityLabel: z.array(z.lazy(() => createCodingSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    query: primitives.createBase64BinarySchema().optional(),
    _query: z.lazy(() => createElementSchema()).optional(),
    detail: z.array(z.lazy(() => createAuditEventDetailSchema())).optional(),
  });

  return baseSchema;
}
