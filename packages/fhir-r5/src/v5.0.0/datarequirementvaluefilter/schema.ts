import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDataRequirementValueFilterSchema() {
  const baseSchema: z.ZodType<types.DataRequirementValueFilter> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    path: primitives.createStringSchema().optional(),
    _path: z.lazy(() => createElementSchema()).optional(),
    searchParam: primitives.createStringSchema().optional(),
    _searchParam: z.lazy(() => createElementSchema()).optional(),
    comparator: primitives.createCodeSchema().optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
    valueDuration: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
