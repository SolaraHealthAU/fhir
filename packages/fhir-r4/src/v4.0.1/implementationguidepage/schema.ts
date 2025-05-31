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

export function createImplementationGuidePageSchema() {
  return getCachedSchema("ImplementationGuidePage", () => {
    const baseSchema: z.ZodType<types.ImplementationGuidePage> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        nameUrl: z.string().optional(),
        _nameUrl: createElementSchema().optional(),
        nameReference: createReferenceSchema().optional(),
        title: primitives.getStringSchema().optional(),
        _title: createElementSchema().optional(),
        generation: z.enum(["html", "markdown", "xml", "generated"]).optional(),
        _generation: createElementSchema().optional(),
        page: z.array(createImplementationGuidePageSchema()).optional(),
      },
    );

    return baseSchema;
  });
}
