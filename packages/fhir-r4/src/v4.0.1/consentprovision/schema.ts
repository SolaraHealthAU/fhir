import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createCodeableConceptSchema,
  createCodingSchema,
} from "../core/schema";
import { createConsentActorSchema } from "../consentactor/schema";
import { createConsentDataSchema } from "../consentdata/schema";

/* Generated from FHIR JSON Schema */

export function createConsentProvisionSchema() {
  return getCachedSchema("ConsentProvision", () => {
    const baseSchema: z.ZodType<types.ConsentProvision> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.enum(["deny", "permit"]).optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
      actor: z.array(createConsentActorSchema()).optional(),
      action: z.array(createCodeableConceptSchema()).optional(),
      securityLabel: z.array(createCodingSchema()).optional(),
      purpose: z.array(createCodingSchema()).optional(),
      class: z.array(createCodingSchema()).optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      dataPeriod: createPeriodSchema().optional(),
      data: z.array(createConsentDataSchema()).optional(),
      provision: z.array(createConsentProvisionSchema()).optional(),
    });

    return baseSchema;
  });
}
