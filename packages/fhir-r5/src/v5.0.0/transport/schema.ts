import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createAnnotationSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createTransportRestrictionSchema } from "../transportrestriction/schema";
import { createTransportInputSchema } from "../transportinput/schema";
import { createTransportOutputSchema } from "../transportoutput/schema";

/* Generated from FHIR JSON Schema */

export function createTransportSchema() {
  const baseSchema: z.ZodType<types.Transport> = z.object({
    resourceType: z.literal("Transport"),
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
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    instantiatesCanonical: primitives.createCanonicalSchema().optional(),
    instantiatesUri: primitives.createUriSchema().optional(),
    _instantiatesUri: z.lazy(() => createElementSchema()).optional(),
    basedOn: z.array(z.lazy(() => createReferenceSchema())).optional(),
    groupIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    partOf: z.array(z.lazy(() => createReferenceSchema())).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusReason: z.lazy(() => createCodeableConceptSchema()).optional(),
    intent: primitives.createCodeSchema().optional(),
    _intent: z.lazy(() => createElementSchema()).optional(),
    priority: primitives.createCodeSchema().optional(),
    _priority: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    focus: z.lazy(() => createReferenceSchema()).optional(),
    for: z.lazy(() => createReferenceSchema()).optional(),
    encounter: z.lazy(() => createReferenceSchema()).optional(),
    completionTime: primitives.createDateTimeSchema().optional(),
    _completionTime: z.lazy(() => createElementSchema()).optional(),
    authoredOn: primitives.createDateTimeSchema().optional(),
    _authoredOn: z.lazy(() => createElementSchema()).optional(),
    lastModified: primitives.createDateTimeSchema().optional(),
    _lastModified: z.lazy(() => createElementSchema()).optional(),
    requester: z.lazy(() => createReferenceSchema()).optional(),
    performerType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    owner: z.lazy(() => createReferenceSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    insurance: z.array(z.lazy(() => createReferenceSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    relevantHistory: z.array(z.lazy(() => createReferenceSchema())).optional(),
    restriction: z.lazy(() => createTransportRestrictionSchema()).optional(),
    input: z.array(z.lazy(() => createTransportInputSchema())).optional(),
    output: z.array(z.lazy(() => createTransportOutputSchema())).optional(),
    requestedLocation: z.lazy(() => createReferenceSchema()),
    currentLocation: z.lazy(() => createReferenceSchema()),
    reason: z.lazy(() => createCodeableReferenceSchema()).optional(),
    history: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
