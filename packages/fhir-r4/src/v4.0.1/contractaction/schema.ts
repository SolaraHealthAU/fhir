import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
  createTimingSchema,
  createAnnotationSchema,
} from "../core/schema";
import { createContractSubjectSchema } from "../contractsubject/schema";

/* Generated from FHIR JSON Schema */

export function createContractActionSchema() {
  return getCachedSchema("ContractAction", () => {
    const baseSchema: z.ZodType<types.ContractAction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      doNotPerform: primitives.getBooleanSchema().optional(),
      _doNotPerform: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema(),
      subject: z.array(createContractSubjectSchema()).optional(),
      intent: createCodeableConceptSchema(),
      linkId: z.array(primitives.getStringSchema()).optional(),
      _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
      status: createCodeableConceptSchema(),
      context: createReferenceSchema().optional(),
      contextLinkId: z.array(primitives.getStringSchema()).optional(),
      _contextLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
      occurrenceDateTime: z.string().optional(),
      _occurrenceDateTime: z.lazy(() => createElementSchema()).optional(),
      occurrencePeriod: createPeriodSchema().optional(),
      occurrenceTiming: createTimingSchema().optional(),
      requester: z.array(createReferenceSchema()).optional(),
      requesterLinkId: z.array(primitives.getStringSchema()).optional(),
      _requesterLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
      performerType: z.array(createCodeableConceptSchema()).optional(),
      performerRole: createCodeableConceptSchema().optional(),
      performer: createReferenceSchema().optional(),
      performerLinkId: z.array(primitives.getStringSchema()).optional(),
      _performerLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
      reasonCode: z.array(createCodeableConceptSchema()).optional(),
      reasonReference: z.array(createReferenceSchema()).optional(),
      reason: z.array(primitives.getStringSchema()).optional(),
      _reason: z.array(z.lazy(() => createElementSchema())).optional(),
      reasonLinkId: z.array(primitives.getStringSchema()).optional(),
      _reasonLinkId: z.array(z.lazy(() => createElementSchema())).optional(),
      note: z.array(createAnnotationSchema()).optional(),
      securityLabelNumber: z
        .array(primitives.getUnsignedIntSchema())
        .optional(),
      _securityLabelNumber: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
    });

    return baseSchema;
  });
}
