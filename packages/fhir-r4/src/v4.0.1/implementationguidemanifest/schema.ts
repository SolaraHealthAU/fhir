import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createImplementationGuideResource1Schema } from "../implementationguideresource1/schema";
import { createImplementationGuidePage1Schema } from "../implementationguidepage1/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideManifestSchema() {
  return getCachedSchema("ImplementationGuideManifest", () => {
    const baseSchema: z.ZodType<types.ImplementationGuideManifest> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        rendering: primitives.getUrlSchema().optional(),
        _rendering: createElementSchema().optional(),
        resource: z.array(createImplementationGuideResource1Schema()),
        page: z.array(createImplementationGuidePage1Schema()).optional(),
        image: z.array(primitives.getStringSchema()).optional(),
        _image: z.array(createElementSchema()).optional(),
        other: z.array(primitives.getStringSchema()).optional(),
        _other: z.array(createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
