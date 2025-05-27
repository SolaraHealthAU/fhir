import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptLinkSchema } from "../testscriptlink/schema";
import { createTestScriptCapabilitySchema } from "../testscriptcapability/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptMetadataSchema() {
  const baseSchema: z.ZodType<types.TestScriptMetadata> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    link: z.array(z.lazy(() => createTestScriptLinkSchema())).optional(),
    capability: z.array(z.lazy(() => createTestScriptCapabilitySchema())),
  });

  return baseSchema;
}
