import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("Provenance", () => {
    const baseSchema: z.ZodType<types.Provenance> = z.strictObject({
      resourceType: z.literal("Provenance"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      target: z.array(createReferenceSchema()),
      occurredPeriod: createPeriodSchema().optional(),
      occurredDateTime: z.string().optional(),
      _occurredDateTime: createElementSchema().optional(),
      recorded: primitives.getInstantSchema(),
      _recorded: createElementSchema().optional(),
      policy: z.array(primitives.getUriSchema()).optional(),
      _policy: z.array(createElementSchema()).optional(),
      location: createReferenceSchema().optional(),
      reason: z.array(createCodeableConceptSchema()).optional(),
      activity: createCodeableConceptSchema().optional(),
      agent: z.array(createProvenanceAgentSchema()),
      entity: z.array(createProvenanceEntitySchema()).optional(),
      signature: z.array(createSignatureSchema()).optional(),
    });

    return baseSchema;
  });
}
