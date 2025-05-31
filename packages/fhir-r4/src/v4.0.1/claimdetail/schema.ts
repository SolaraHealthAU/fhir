import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
  createReferenceSchema,
} from "../core/schema";
import { createClaimSubDetailSchema } from "../claimsubdetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimDetailSchema() {
  return getCachedSchema("ClaimDetail", () => {
    const baseSchema: z.ZodType<types.ClaimDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      sequence: primitives.getPositiveIntSchema().optional(),
      _sequence: createElementSchema().optional(),
      revenue: createCodeableConceptSchema().optional(),
      category: createCodeableConceptSchema().optional(),
      productOrService: createCodeableConceptSchema(),
      modifier: z.array(createCodeableConceptSchema()).optional(),
      programCode: z.array(createCodeableConceptSchema()).optional(),
      quantity: createQuantitySchema().optional(),
      unitPrice: createMoneySchema().optional(),
      factor: primitives.getDecimalSchema().optional(),
      _factor: createElementSchema().optional(),
      net: createMoneySchema().optional(),
      udi: z.array(createReferenceSchema()).optional(),
      subDetail: z.array(createClaimSubDetailSchema()).optional(),
    });

    return baseSchema;
  });
}
