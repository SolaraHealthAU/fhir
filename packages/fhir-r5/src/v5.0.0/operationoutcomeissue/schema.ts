import { z } from "zod/v4";
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
    severity: primitives.createCodeSchema().optional(),
    _severity: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
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
