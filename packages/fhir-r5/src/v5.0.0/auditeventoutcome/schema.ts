import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventOutcomeSchema() {
  const baseSchema: z.ZodType<types.AuditEventOutcome> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: z.lazy(() => createCodingSchema()),
    detail: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
  });

  return baseSchema;
}
