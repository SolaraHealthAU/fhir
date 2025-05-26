import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOperationOutcomeIssueSchema() {
  const baseSchema: z.ZodType<types.OperationOutcomeIssue> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    severity: z.enum(["fatal", "error", "warning", "information"]),
    _severity: z.lazy(() => createElementSchema()).optional(),
    code: z.enum([
      "invalid",
      "structure",
      "required",
      "value",
      "invariant",
      "security",
      "login",
      "unknown",
      "expired",
      "forbidden",
      "suppressed",
      "processing",
      "not-supported",
      "duplicate",
      "multiple-matches",
      "not-found",
      "deleted",
      "too-long",
      "code-invalid",
      "extension",
      "too-costly",
      "business-rule",
      "conflict",
      "transient",
      "lock-error",
      "no-store",
      "exception",
      "timeout",
      "incomplete",
      "throttled",
      "informational",
    ]),
    _code: z.lazy(() => createElementSchema()).optional(),
    details: z.lazy(() => createCodeableConceptSchema()).optional(),
    diagnostics: primitives.createStringSchema().optional(),
    _diagnostics: z.lazy(() => createElementSchema()).optional(),
    location: z.array(primitives.createStringSchema()).optional(),
    _location: z.array(z.lazy(() => createElementSchema())).optional(),
    expression: z.array(primitives.createStringSchema()).optional(),
    _expression: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
