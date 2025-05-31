import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
  createDurationSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDataRequirementDateFilterSchema() {
  return getCachedSchema("DataRequirementDateFilter", () => {
    const baseSchema: z.ZodType<types.DataRequirementDateFilter> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        path: primitives.getStringSchema().optional(),
        _path: createElementSchema().optional(),
        searchParam: primitives.getStringSchema().optional(),
        _searchParam: createElementSchema().optional(),
        valueDateTime: z.string().optional(),
        _valueDateTime: createElementSchema().optional(),
        valuePeriod: createPeriodSchema().optional(),
        valueDuration: createDurationSchema().optional(),
      });

    return baseSchema;
  });
}
