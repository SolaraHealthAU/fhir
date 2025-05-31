import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createTestScriptLinkSchema } from "../testscriptlink/schema";
import { createTestScriptCapabilitySchema } from "../testscriptcapability/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptMetadataSchema() {
  return getCachedSchema("TestScriptMetadata", () => {
    const baseSchema: z.ZodType<types.TestScriptMetadata> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      link: z.array(createTestScriptLinkSchema()).optional(),
      capability: z.array(createTestScriptCapabilitySchema()),
    });

    return baseSchema;
  });
}
