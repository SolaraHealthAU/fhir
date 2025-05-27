import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodingSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAuditEventAgentSchema } from "../auditeventagent/schema";
import { createAuditEventSourceSchema } from "../auditeventsource/schema";
import { createAuditEventEntitySchema } from "../auditevententity/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventSchema() {
  return getCachedSchema("AuditEvent", () => {
    const baseSchema: z.ZodType<types.AuditEvent> = z.strictObject({
      resourceType: z.literal("AuditEvent"),
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
      type: createCodingSchema(),
      subtype: z.array(createCodingSchema()).optional(),
      action: z.enum(["C", "R", "U", "D", "E"]).optional(),
      _action: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
      recorded: primitives.getInstantSchema(),
      _recorded: z.lazy(() => createElementSchema()).optional(),
      outcome: z.enum(["0", "4", "8", "12"]).optional(),
      _outcome: z.lazy(() => createElementSchema()).optional(),
      outcomeDesc: primitives.getStringSchema().optional(),
      _outcomeDesc: z.lazy(() => createElementSchema()).optional(),
      purposeOfEvent: z.array(createCodeableConceptSchema()).optional(),
      agent: z.array(createAuditEventAgentSchema()),
      source: createAuditEventSourceSchema(),
      entity: z.array(createAuditEventEntitySchema()).optional(),
    });

    return baseSchema;
  });
}
