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
      _implicitRules: createElementSchema().optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      text: createNarrativeSchema().optional(),
      contained: z.array(createResourceListSchema()).optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      target: z.array(createReferenceSchema()).optional(),
      targetLocation: z.array(primitives.getStringSchema()).optional(),
      _targetLocation: z.array(createElementSchema()).optional(),
      need: createCodeableConceptSchema().optional(),
      status: primitives.getCodeSchema(),
      _status: createElementSchema().optional(),
      statusDate: primitives.getDateTimeSchema().optional(),
      _statusDate: createElementSchema().optional(),
      validationType: createCodeableConceptSchema().optional(),
      validationProcess: z.array(createCodeableConceptSchema()).optional(),
      frequency: createTimingSchema().optional(),
      lastPerformed: primitives.getDateTimeSchema().optional(),
      _lastPerformed: createElementSchema().optional(),
      nextScheduled: primitives.getDateSchema().optional(),
      _nextScheduled: createElementSchema().optional(),
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
