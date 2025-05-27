import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("VerificationResult", () => {
    const baseSchema: z.ZodType<types.VerificationResult> = z.strictObject({
      resourceType: z.literal("VerificationResult"),
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
      target: z.array(createReferenceSchema()).optional(),
      targetLocation: z.array(primitives.getStringSchema()).optional(),
      _targetLocation: z.array(z.lazy(() => createElementSchema())).optional(),
      need: createCodeableConceptSchema().optional(),
      status: primitives.getCodeSchema(),
      _status: z.lazy(() => createElementSchema()).optional(),
      statusDate: primitives.getDateTimeSchema().optional(),
      _statusDate: z.lazy(() => createElementSchema()).optional(),
      validationType: createCodeableConceptSchema().optional(),
      validationProcess: z.array(createCodeableConceptSchema()).optional(),
      frequency: createTimingSchema().optional(),
      lastPerformed: primitives.getDateTimeSchema().optional(),
      _lastPerformed: z.lazy(() => createElementSchema()).optional(),
      nextScheduled: primitives.getDateSchema().optional(),
      _nextScheduled: z.lazy(() => createElementSchema()).optional(),
      failureAction: createCodeableConceptSchema().optional(),
      primarySource: z
        .array(createVerificationResultPrimarySourceSchema())
        .optional(),
      attestation: createVerificationResultAttestationSchema().optional(),
      validator: z.array(createVerificationResultValidatorSchema()).optional(),
    });

    return baseSchema;
  });
}
