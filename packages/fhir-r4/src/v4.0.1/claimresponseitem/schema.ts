import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseDetailSchema } from "../claimresponsedetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseItemSchema() {
  return getCachedSchema("ClaimResponseItem", () => {
    const baseSchema: z.ZodType<types.ClaimResponseItem> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      itemSequence: primitives.getPositiveIntSchema(),
      _itemSequence: z.lazy(() => createElementSchema()).optional(),
      noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
      _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
      adjudication: z.array(createClaimResponseAdjudicationSchema()),
      detail: z.array(createClaimResponseDetailSchema()).optional(),
    });

    return baseSchema;
  });
}
