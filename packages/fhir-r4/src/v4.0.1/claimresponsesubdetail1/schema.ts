import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createQuantitySchema,
  createMoneySchema,
  createElementSchema,
} from "../core/schema";
import { createClaimResponseAdjudicationSchema } from "../claimresponseadjudication/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseSubDetail1Schema() {
  const baseSchema: z.ZodType<types.ClaimResponseSubDetail1> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    productOrService: z.lazy(() => createCodeableConceptSchema()),
    modifier: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    unitPrice: z.lazy(() => createMoneySchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    net: z.lazy(() => createMoneySchema()).optional(),
    noteNumber: z.array(primitives.createPositiveIntSchema()).optional(),
    _noteNumber: z.array(z.lazy(() => createElementSchema())).optional(),
    adjudication: z.array(
      z.lazy(() => createClaimResponseAdjudicationSchema()),
    ),
  });

  return baseSchema;
}
