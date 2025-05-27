import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
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
    endpointUrl: z.string().optional(),
    _endpointUrl: z.lazy(() => createElementSchema()).optional(),
    endpointReference: z.lazy(() => createReferenceSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    software: primitives.createStringSchema().optional(),
    _software: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    contact: z.lazy(() => createContactPointSchema()).optional(),
  });

  return baseSchema;
}
