import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";
import { createClaimResponseReviewOutcomeSchema } from "../claimresponsereviewoutcome/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseSubDetailSchema } from "../claimresponsesubdetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseDetailSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    detailSequence: primitives.createPositiveIntSchema().optional(),
    _detailSequence: z.lazy(() => createElementSchema()).optional(),
    traceNumber: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    reviewOutcome: z
      .lazy(() => createClaimResponseReviewOutcomeSchema())
      .optional(),
    adjudication: z
      .array(z.lazy(() => createClaimResponseAdjudicationSchema()))
      .optional(),
    subDetail: z
      .array(z.lazy(() => createClaimResponseSubDetailSchema()))
      .optional(),
  });

  return baseSchema;
}
