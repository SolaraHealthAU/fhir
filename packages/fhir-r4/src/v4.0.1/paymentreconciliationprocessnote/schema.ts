import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentReconciliationProcessNoteSchema() {
  return getCachedSchema("PaymentReconciliationProcessNote", () => {
    const baseSchema: z.ZodType<types.PaymentReconciliationProcessNote> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        type: z.enum(["display", "print", "printoper"]).optional(),
        _type: z.lazy(() => createElementSchema()).optional(),
        text: primitives.getStringSchema().optional(),
        _text: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
