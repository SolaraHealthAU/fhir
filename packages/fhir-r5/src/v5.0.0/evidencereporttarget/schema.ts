import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceReportTargetSchema() {
  const baseSchema: z.ZodType<types.EvidenceReportTarget> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    url: primitives.createUriSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    display: primitives.createMarkdownSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    resource: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
