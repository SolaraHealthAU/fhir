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

export function createOperationOutcomeIssueSchema() {
  return getCachedSchema("OperationOutcomeIssue", () => {
    const baseSchema: z.ZodType<types.OperationOutcomeIssue> = z.strictObject({
      id: primitives.getStringSchema().optional(),
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
      details: createCodeableConceptSchema().optional(),
      diagnostics: primitives.getStringSchema().optional(),
      _diagnostics: z.lazy(() => createElementSchema()).optional(),
      location: z.array(primitives.getStringSchema()).optional(),
      _location: z.array(z.lazy(() => createElementSchema())).optional(),
      expression: z.array(primitives.getStringSchema()).optional(),
      _expression: z.array(z.lazy(() => createElementSchema())).optional(),
    });

    return baseSchema;
  });
}
