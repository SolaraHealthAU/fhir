import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createTimingSchema,
  createCodeableReferenceSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createContractSubjectSchema } from "../contractsubject/schema";

/* Generated from FHIR JSON Schema */

export function createContractActionSchema() {
  const baseSchema: z.ZodType<types.ContractAction> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    doNotPerform: primitives.createBooleanSchema().optional(),
    _doNotPerform: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    subject: z.array(z.lazy(() => createContractSubjectSchema())).optional(),
    intent: z.lazy(() => createCodeableConceptSchema()),
    linkId: z.array(primitives.createStringSchema()).optional(),
    _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
    status: z.lazy(() => createCodeableConceptSchema()),
    context: z.lazy(() => createReferenceSchema()).optional(),
    contextLinkId: z.array(primitives.createStringSchema()).optional(),
    _contextLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
    occurrenceDateTime: z.string().optional(),
    _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
    occurrencePeriod: z.lazy(() => createPeriodSchema()).optional(),
    occurrenceTiming: z.lazy(() => createTimingSchema()).optional(),
    requester: z.array(z.lazy(() => createReferenceSchema())).optional(),
    requesterLinkId: z.array(primitives.createStringSchema()).optional(),
    _requesterLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
    performerType: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    performerRole: z.lazy(() => createCodeableConceptSchema()).optional(),
    performer: z.lazy(() => createReferenceSchema()).optional(),
    performerLinkId: z.array(primitives.createStringSchema()).optional(),
    _performerLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
    reason: z.array(z.lazy(() => createCodeableReferenceSchema())).optional(),
    reasonLinkId: z.array(primitives.createStringSchema()).optional(),
    _reasonLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    securityLabelNumber: z
      .array(primitives.createUnsignedIntSchema())
      .optional(),
    _securityLabelNumber: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
  });

  return baseSchema;
}
