import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.AuditEvent> = z.object({
    resourceType: z.literal("AuditEvent"),
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
    type: z.lazy(() => createCodingSchema()),
    subtype: z.array(z.lazy(() => createCodingSchema())).optional(),
    action: z.enum(["C", "R", "U", "D", "E"]).optional(),
    _action: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    recorded: primitives.createInstantSchema(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    outcome: z.enum(["0", "4", "8", "12"]).optional(),
    _outcome: z.lazy(() => createElementSchema()).optional(),
    outcomeDesc: primitives.createStringSchema().optional(),
    _outcomeDesc: z.lazy(() => createElementSchema()).optional(),
    purposeOfEvent: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    agent: z.array(z.lazy(() => createAuditEventAgentSchema())),
    source: z.lazy(() => createAuditEventSourceSchema()),
    entity: z.array(z.lazy(() => createAuditEventEntitySchema())).optional(),
  });

  return baseSchema;
}
