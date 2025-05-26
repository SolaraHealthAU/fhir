import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
  createSignatureSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createProvenanceAgentSchema } from "../provenanceagent/schema";
import { createProvenanceEntitySchema } from "../provenanceentity/schema";

/* Generated from FHIR JSON Schema */

export function createProvenanceSchema() {
  const baseSchema: z.ZodType<types.Provenance> = z.object({
    resourceType: z.literal("Provenance"),
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
    target: z.array(z.lazy(() => createReferenceSchema())),
    occurredPeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurredDateTime: z.string().optional(),
    _occurredDateTime: z.lazy(() => createElementSchema()).optional(),
    recorded: primitives.createInstantSchema(),
    _recorded: z.lazy(() => createElementSchema()).optional(),
    policy: z.array(primitives.createUriSchema()).optional(),
    _policy: z.array(z.lazy(() => createElementSchema())).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    reason: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    activity: z.lazy(() => createCodeableConceptSchema()).optional(),
    agent: z.array(z.lazy(() => createProvenanceAgentSchema())),
    entity: z.array(z.lazy(() => createProvenanceEntitySchema())).optional(),
    signature: z.array(z.lazy(() => createSignatureSchema())).optional(),
  });

  return baseSchema;
}
