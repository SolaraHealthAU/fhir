import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createMoneySchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCoverageEligibilityResponseBenefitSchema() {
  const baseSchema: z.ZodType<types.CoverageEligibilityResponseBenefit> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.lazy(() => createCodeableConceptSchema()),
      allowedUnsignedInt: z.number().optional(),
      _allowedUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      allowedString: z.string().optional(),
      _allowedString: z.lazy(() => createElementSchema()).optional(),
      allowedMoney: z.lazy(() => createMoneySchema()).optional(),
      usedUnsignedInt: z.number().optional(),
      _usedUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      usedString: z.string().optional(),
      _usedString: z.lazy(() => createElementSchema()).optional(),
      usedMoney: z.lazy(() => createMoneySchema()).optional(),
    });

  return baseSchema;
}
