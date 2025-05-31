import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createInvoiceParticipantSchema() {
  return getCachedSchema("InvoiceParticipant", () => {
    const baseSchema: z.ZodType<types.InvoiceParticipant> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      role: createCodeableConceptSchema().optional(),
      actor: createReferenceSchema(),
    });

    return baseSchema;
  });
}
