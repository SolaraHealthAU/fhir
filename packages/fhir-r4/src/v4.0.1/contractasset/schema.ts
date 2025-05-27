import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("ContractAsset", () => {
    const baseSchema: z.ZodType<types.ContractAsset> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      scope: createCodeableConceptSchema().optional(),
      type: z.array(createCodeableConceptSchema()).optional(),
      typeReference: z.array(createReferenceSchema()).optional(),
      subtype: z.array(createCodeableConceptSchema()).optional(),
      relationship: createCodingSchema().optional(),
      context: z.array(createContractContextSchema()).optional(),
      condition: primitives.getStringSchema().optional(),
      _condition: z.lazy(() => createElementSchema()).optional(),
      periodType: z.array(createCodeableConceptSchema()).optional(),
      period: z.array(createPeriodSchema()).optional(),
      usePeriod: z.array(createPeriodSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
      linkId: z.array(primitives.getStringSchema()).optional(),
      _linkId: z.array(z.lazy(() => createElementSchema())).optional(),
      answer: z.array(createContractAnswerSchema()).optional(),
      securityLabelNumber: z
        .array(primitives.getUnsignedIntSchema())
        .optional(),
      _securityLabelNumber: z
        .array(z.lazy(() => createElementSchema()))
        .optional(),
      valuedItem: z.array(createContractValuedItemSchema()).optional(),
    });

    return baseSchema;
  });
}
