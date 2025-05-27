import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createContactPointSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderSourceSchema() {
  const baseSchema: z.ZodType<types.MessageHeaderSource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    software: primitives.createStringSchema().optional(),
    _software: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    contact: z.lazy(() => createContactPointSchema()).optional(),
    endpoint: primitives.createUrlSchema(),
    _endpoint: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
