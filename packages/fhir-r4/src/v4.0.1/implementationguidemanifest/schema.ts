import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createImplementationGuideResource1Schema } from "../implementationguideresource1/schema";
import { createImplementationGuidePage1Schema } from "../implementationguidepage1/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideManifestSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideManifest> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    rendering: primitives.createUrlSchema().optional(),
    _rendering: z.lazy(() => createElementSchema()).optional(),
    resource: z.array(z.lazy(() => createImplementationGuideResource1Schema())),
    page: z
      .array(z.lazy(() => createImplementationGuidePage1Schema()))
      .optional(),
    image: z.array(primitives.createStringSchema()).optional(),
    _image: z.array(z.lazy(() => createElementSchema())).optional(),
    other: z.array(primitives.createStringSchema()).optional(),
    _other: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
