import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBinarySchema() {
  return getCachedSchema("Binary", () => {
    const baseSchema: z.ZodType<types.Binary> = z.strictObject({
      resourceType: z.literal("Binary"),
      id: primitives.getIdSchema().optional(),
      meta: createMetaSchema().optional(),
      implicitRules: primitives.getUriSchema().optional(),
      _implicitRules: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      contentType: primitives.getCodeSchema(),
      _contentType: z.lazy(() => createElementSchema()).optional(),
      securityContext: createReferenceSchema().optional(),
      data: primitives.getBase64BinarySchema().optional(),
      _data: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
