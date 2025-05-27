import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createAnnotationSchema } from "../core/schema";
import { createEvidenceReportCharacteristicSchema } from "../evidencereportcharacteristic/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceReportSubjectSchema() {
  const baseSchema: z.ZodType<types.EvidenceReportSubject> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    characteristic: z
      .array(z.lazy(() => createEvidenceReportCharacteristicSchema()))
      .optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
  });

  return baseSchema;
}
