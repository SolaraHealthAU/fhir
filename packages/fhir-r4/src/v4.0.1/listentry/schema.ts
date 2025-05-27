import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createListEntrySchema() {
  return getCachedSchema("ListEntry", () => {
    const baseSchema: z.ZodType<types.ListEntry> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      flag: createCodeableConceptSchema().optional(),
      deleted: primitives.getBooleanSchema().optional(),
      _deleted: z.lazy(() => createElementSchema()).optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      item: createReferenceSchema(),
    });

    return baseSchema;
  });
}
