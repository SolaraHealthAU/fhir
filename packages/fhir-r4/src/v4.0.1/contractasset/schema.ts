import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createCodingSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";
import { createContractContextSchema } from "../contractcontext/schema";
import { createContractAnswerSchema } from "../contractanswer/schema";
import { createContractValuedItemSchema } from "../contractvalueditem/schema";

/* Generated from FHIR JSON Schema */

export function createContractAssetSchema() {
  const baseSchema: z.ZodType<types.ContractAsset> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    scope: z.lazy(() => createCodeableConceptSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    typeReference: z.array(z.lazy(() => createReferenceSchema())).optional(),
    subtype: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    relationship: z.lazy(() => createCodingSchema()).optional(),
    context: z.array(z.lazy(() => createContractContextSchema())).optional(),
    condition: primitives.createStringSchema().optional(),
    _condition: z.lazy(() => createElementSchema()).optional(),
    periodType: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    period: z.array(z.lazy(() => createPeriodSchema())).optional(),
    usePeriod: z.array(z.lazy(() => createPeriodSchema())).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    linkId: z.array(primitives.createStringSchema()).optional(),
    _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
    answer: z.array(z.lazy(() => createContractAnswerSchema())).optional(),
    securityLabelNumber: z
      .array(primitives.createUnsignedIntSchema())
      .optional(),
    _securityLabelNumber: z
      .array(z.lazy(() => createElementSchema()))
      .optional(),
    valuedItem: z
      .array(z.lazy(() => createContractValuedItemSchema()))
      .optional(),
  });

  return baseSchema;
}
