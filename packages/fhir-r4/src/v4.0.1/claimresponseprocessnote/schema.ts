import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimResponseProcessNoteSchema() {
  return getCachedSchema("ClaimResponseProcessNote", () => {
    const baseSchema: z.ZodType<types.ClaimResponseProcessNote> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        number: primitives.getPositiveIntSchema().optional(),
        _number: z.lazy(() => createElementSchema()).optional(),
        type: z.enum(["display", "print", "printoper"]).optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        text: primitives.getStringSchema(),
        _text: z.lazy(() => createElementSchema()).optional(),
        language: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
