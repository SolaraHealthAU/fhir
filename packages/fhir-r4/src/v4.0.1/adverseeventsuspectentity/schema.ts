import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createReferenceSchema } from "../core/schema";
import { createAdverseEventCausalitySchema } from "../adverseeventcausality/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventSuspectEntitySchema() {
  const baseSchema: z.ZodType<types.AdverseEventSuspectEntity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    instance: z.lazy(() => createReferenceSchema()),
    causality: z
      .array(z.lazy(() => createAdverseEventCausalitySchema()))
      .optional(),
  });

  return baseSchema;
}
