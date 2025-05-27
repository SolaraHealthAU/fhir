import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseSubDetailSchema() {
  return getCachedSchema("ClaimResponseSubDetail", () => {
    const baseSchema: z.ZodType<types.ClaimResponseSubDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      subDetailSequence: primitives.getPositiveIntSchema().optional(),
      _subDetailSequence: z.lazy(() => createElementSchema()).optional(),
      noteNumber: z.array(primitives.getPositiveIntSchema()).optional(),
      _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
      adjudication: z.array(createClaimResponseAdjudicationSchema()).optional(),
    });

    return baseSchema;
  });
}
