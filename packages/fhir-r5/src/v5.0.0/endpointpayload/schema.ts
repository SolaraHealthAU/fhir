import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEndpointPayloadSchema() {
  const baseSchema: z.ZodType<types.EndpointPayload> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    mimeType: z.array(primitives.createCodeSchema()).optional(),
    _mimeType: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
