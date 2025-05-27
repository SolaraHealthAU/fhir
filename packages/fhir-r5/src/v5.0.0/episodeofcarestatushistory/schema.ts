import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEpisodeOfCareStatusHistorySchema() {
  const baseSchema: z.ZodType<types.EpisodeOfCareStatusHistory> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    status: primitives.createCodeSchema().optional(),
    _status: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()),
  });

  return baseSchema;
}
