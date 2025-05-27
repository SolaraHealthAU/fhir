import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMarketingStatusSchema() {
  const baseSchema: z.ZodType<types.MarketingStatus> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    country: z.lazy(() => createCodeableConceptSchema()),
    jurisdiction: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()),
    dateRange: z.lazy(() => createPeriodSchema()),
    restoreDate: primitives.createDateTimeSchema().optional(),
    _restoreDate: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
