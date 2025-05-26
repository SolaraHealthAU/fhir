import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createMetaSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createBinarySchema() {
  const baseSchema: z.ZodType<types.Binary> = z.object({
    resourceType: z.literal("Binary"),
    id: primitives.createIdSchema().optional(),
    meta: z.lazy(() => createMetaSchema()).optional(),
    implicitRules: primitives.createUriSchema().optional(),
    _implicitRules: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    contentType: primitives.createCodeSchema(),
    _contentType: z.lazy(() => createElementSchema()).optional(),
    securityContext: z.lazy(() => createReferenceSchema()).optional(),
    data: primitives.createBase64BinarySchema().optional(),
    _data: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
