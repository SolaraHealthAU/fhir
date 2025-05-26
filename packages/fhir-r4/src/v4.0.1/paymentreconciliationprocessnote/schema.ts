import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPaymentReconciliationProcessNoteSchema() {
  const baseSchema: z.ZodType<types.PaymentReconciliationProcessNote> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.enum(["display", "print", "printoper"]).optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      text: primitives.createStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
