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

export function createDiagnosticReportMediaSchema() {
  return getCachedSchema("DiagnosticReportMedia", () => {
    const baseSchema: z.ZodType<types.DiagnosticReportMedia> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: createElementSchema().optional(),
      link: createReferenceSchema(),
    });

    return baseSchema;
  });
}
