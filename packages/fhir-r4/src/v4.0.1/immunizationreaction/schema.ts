import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationReactionSchema() {
  return getCachedSchema("ImmunizationReaction", () => {
    const baseSchema: z.ZodType<types.ImmunizationReaction> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      date: primitives.getDateTimeSchema().optional(),
      _date: z.lazy(() => createElementSchema()).optional(),
      detail: createReferenceSchema().optional(),
      reported: primitives.getBooleanSchema().optional(),
      _reported: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
