import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";
import { createClaimResponseDetailSchema } from "../claimresponsedetail/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseItemSchema() {
  const baseSchema: z.ZodType<types.ClaimResponseItem> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    itemSequence: primitives.createPositiveIntSchema(),
    _itemSequence: z.lazy(() => createElementSchema()).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    adjudication: z.array(
      z.lazy(() => createClaimResponseAdjudicationSchema()),
    ),
    detail: z.array(z.lazy(() => createClaimResponseDetailSchema())).optional(),
  });

  return baseSchema;
}
