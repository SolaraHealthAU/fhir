import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createListEntrySchema() {
  const baseSchema: z.ZodType<types.ListEntry> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    flag: z.lazy(() => createCodeableConceptSchema()).optional(),
    deleted: primitives.createBooleanSchema().optional(),
    _deleted: z.lazy(() => createElementSchema()).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    item: z.lazy(() => createReferenceSchema()),
  });

  return baseSchema;
}
