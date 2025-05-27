import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createObservationTriggeredBySchema() {
  const baseSchema: z.ZodType<types.ObservationTriggeredBy> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    observation: z.lazy(() => createReferenceSchema()),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    reason: primitives.createStringSchema().optional(),
    _reason: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
