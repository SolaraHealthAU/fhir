import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";
import { createAdverseEventCausalitySchema } from "../adverseeventcausality/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventSuspectEntitySchema() {
  const baseSchema: z.ZodType<types.AdverseEventSuspectEntity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    instanceCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    instanceReference: z.lazy(() => createReferenceSchema()).optional(),
    causality: z.lazy(() => createAdverseEventCausalitySchema()).optional(),
  });

  return baseSchema;
}
