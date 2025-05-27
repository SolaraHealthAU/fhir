import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createMessageHeaderDestinationSchema() {
  const baseSchema: z.ZodType<types.MessageHeaderDestination> = z.object({
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
    target: z.lazy(() => createReferenceSchema()).optional(),
    receiver: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
