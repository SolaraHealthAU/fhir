import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
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
  const baseSchema: z.ZodType<types.CoverageEligibilityRequestItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    supportingInfoSequence: z
      .array(primitives.createPositiveIntSchema())
      .optional(),
    _supportingInfoSequence: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    category: z.lazy(() => createCodeableConceptSchema()).optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()).optional(),
    modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    provider: z.lazy(() => createReferenceSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    facility: z.lazy(() => createReferenceSchema()).optional(),
    diagnosis: z
      .array(z.lazy(() => createCoverageEligibilityRequestDiagnosisSchema()))
      .optional(),
    detail: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
