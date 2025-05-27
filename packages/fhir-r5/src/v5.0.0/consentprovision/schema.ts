import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
  createCodingSchema,
  createExpressionSchema,
} from "../core/schema";
import { createConsentActorSchema } from "../consentactor/schema";
import { createConsentDataSchema } from "../consentdata/schema";

/* Generated from FHIR JSON Schema */

export function createConsentProvisionSchema() {
  const baseSchema: z.ZodType<types.ConsentProvision> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    actor: z.array(z.lazy(() => createConsentActorSchema())).optional(),
    action: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    securityLabel: z.array(z.lazy(() => createCodingSchema())).optional(),
    purpose: z.array(z.lazy(() => createCodingSchema())).optional(),
    documentType: z.array(z.lazy(() => createCodingSchema())).optional(),
    resourceType: z.literal("ConsentProvision"),
    code: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    dataPeriod: z.lazy(() => createPeriodSchema()).optional(),
    data: z.array(z.lazy(() => createConsentDataSchema())).optional(),
    expression: z.lazy(() => createExpressionSchema()).optional(),
    provision: z.array(z.lazy(() => createConsentProvisionSchema())).optional(),
  });

  return baseSchema;
}
