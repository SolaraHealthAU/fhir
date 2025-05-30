import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";
import { createAuditEventDetailSchema } from "../auditeventdetail/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventEntitySchema() {
  return getCachedSchema("AuditEventEntity", () => {
    const baseSchema: z.ZodType<types.AuditEventEntity> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      what: createReferenceSchema().optional(),
      type: createCodingSchema().optional(),
      role: createCodingSchema().optional(),
      lifecycle: createCodingSchema().optional(),
      securityLabel: z.array(createCodingSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      query: primitives.getBase64BinarySchema().optional(),
      _query: z.lazy(() => createElementSchema()).optional(),
      detail: z.array(createAuditEventDetailSchema()).optional(),
    });

    return baseSchema;
  });
}
