import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createAuditEventOutcomeSchema } from "../auditeventoutcome/schema";
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
    category: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    action: primitives.createCodeSchema().optional(),
    _action: z.lazy(() => createElementSchema()).optional(),
    severity: primitives.createCodeSchema().optional(),
    _severity: z.lazy(() => createElementSchema()).optional(),
    occurredPeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurredDateTime: z.string().optional(),
    _occurredDateTime: z.lazy(() => createElementSchema()).optional(),
    recorded: primitives.createInstantSchema().optional(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    outcome: z.lazy(() => createAuditEventOutcomeSchema()).optional(),
    authorization: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    patient: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    agent: z.array(z.lazy(() => createAuditEventAgentSchema())),
    source: z.lazy(() => createAuditEventSourceSchema()),
    entity: z.array(z.lazy(() => createAuditEventEntitySchema())).optional(),
  });

  return baseSchema;
}
