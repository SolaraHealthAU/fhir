import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseSubDetailSchema } from "../claimresponsesubdetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseDetailSchema() {
  return getCachedSchema("ClaimResponseDetail", () => {
    const baseSchema: z.ZodType<types.ClaimResponseDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      detailSequence: primitives.getPositiveIntSchema().optional(),
      _detailSequence: createElementSchema().optional(),
      noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
      _noteNumber: z.array(createElementSchema()).optional(),
      adjudication: z.array(createClaimResponseAdjudicationSchema()),
      subDetail: z.array(createClaimResponseSubDetailSchema()).optional(),
    });

    return baseSchema;
  });
}
