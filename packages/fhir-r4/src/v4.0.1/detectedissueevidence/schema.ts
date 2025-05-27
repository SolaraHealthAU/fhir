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

export function createDetectedIssueEvidenceSchema() {
  return getCachedSchema("DetectedIssueEvidence", () => {
    const baseSchema: z.ZodType<types.DetectedIssueEvidence> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      code: z.array(createCodeableConceptSchema()).optional(),
      detail: z.array(createReferenceSchema()).optional(),
    });

    return baseSchema;
  });
}
