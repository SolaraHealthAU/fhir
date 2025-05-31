import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
  createMoneySchema,
} from "../core/schema";
import { createCoverageEligibilityRequestDiagnosisSchema } from "../coverageeligibilityrequestdiagnosis/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityRequestItemSchema() {
  return getCachedSchema("CoverageEligibilityRequestItem", () => {
    const baseSchema: z.ZodType<types.CoverageEligibilityRequestItem> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        supportingInfoSequence: z
          .array(primitives.getPositiveIntSchema())
          .optional(),
        _supportingInfoSequence: z.array(createElementSchema()).optional(),
        category: createCodeableConceptSchema().optional(),
        productOrService: createCodeableConceptSchema().optional(),
        modifier: z.array(createCodeableConceptSchema()).optional(),
        provider: createReferenceSchema().optional(),
        quantity: createQuantitySchema().optional(),
        unitPrice: createMoneySchema().optional(),
        facility: createReferenceSchema().optional(),
        diagnosis: z
          .array(createCoverageEligibilityRequestDiagnosisSchema())
          .optional(),
        detail: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
