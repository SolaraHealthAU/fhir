import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createTimingSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";
import { createVerificationResultPrimarySourceSchema } from "../verificationresultprimarysource/schema";
import { createVerificationResultAttestationSchema } from "../verificationresultattestation/schema";
import { createVerificationResultValidatorSchema } from "../verificationresultvalidator/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultSchema() {
  const baseSchema: z.ZodType<types.VerificationResult> = z.object({
    resourceType: z.literal("VerificationResult"),
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
    target: z.array(z.lazy(() => createReferenceSchema())).optional(),
    targetLocation: z.array(primitives.createStringSchema()).optional(),
    _targetLocation: z.array(z.lazy(() => createElementSchema())).optional(),
    need: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    statusDate: primitives.createDateTimeSchema().optional(),
    _statusDate: z.lazy(() => createElementSchema()).optional(),
    validationType: z.lazy(() => createCodeableConceptSchema()).optional(),
    validationProcess: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    frequency: z.lazy(() => createTimingSchema()).optional(),
    lastPerformed: primitives.createDateTimeSchema().optional(),
    _lastPerformed: z.lazy(() => createElementSchema()).optional(),
    nextScheduled: primitives.createDateSchema().optional(),
    _nextScheduled: z.lazy(() => createElementSchema()).optional(),
    failureAction: z.lazy(() => createCodeableConceptSchema()).optional(),
    primarySource: z
      .array(z.lazy(() => createVerificationResultPrimarySourceSchema()))
      .optional(),
    attestation: z
      .lazy(() => createVerificationResultAttestationSchema())
      .optional(),
    validator: z
      .array(z.lazy(() => createVerificationResultValidatorSchema()))
      .optional(),
  });

  return baseSchema;
}
