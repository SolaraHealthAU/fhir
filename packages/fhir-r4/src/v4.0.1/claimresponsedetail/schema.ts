import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
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
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    adjudication: z.array(
      z.lazy(() => createClaimResponseAdjudicationSchema()),
    ),
    subDetail: z
      .array(z.lazy(() => createClaimResponseSubDetailSchema()))
      .optional(),
  });

  return baseSchema;
}
