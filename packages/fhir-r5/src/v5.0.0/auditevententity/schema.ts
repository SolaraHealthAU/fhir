import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createAuditEventDetailSchema } from "../auditeventdetail/schema";
import { createAuditEventAgentSchema } from "../auditeventagent/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventEntitySchema() {
  const baseSchema: z.ZodType<types.AuditEventEntity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    what: z.lazy(() => createReferenceSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    securityLabel: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    query: primitives.createBase64BinarySchema().optional(),
    _query: z.lazy(() => createElementSchema()).optional(),
    detail: z.array(z.lazy(() => createAuditEventDetailSchema())).optional(),
    agent: z.array(z.lazy(() => createAuditEventAgentSchema())).optional(),
  });

  return baseSchema;
}
