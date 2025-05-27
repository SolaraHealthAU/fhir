import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createEvidenceReportTargetSchema } from "../evidencereporttarget/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceReportRelatesToSchema() {
  const baseSchema: z.ZodType<types.EvidenceReportRelatesTo> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    target: z.lazy(() => createEvidenceReportTargetSchema()),
  });

  return baseSchema;
}
