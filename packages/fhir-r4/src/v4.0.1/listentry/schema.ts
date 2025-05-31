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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      flag: createCodeableConceptSchema().optional(),
      deleted: primitives.getBooleanSchema().optional(),
      _deleted: createElementSchema().optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: createElementSchema().optional(),
      item: createReferenceSchema(),
    });

    return baseSchema;
  });
}
