import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionParticipantSchema() {
  const baseSchema: z.ZodType<types.ActivityDefinitionParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    typeCanonical: primitives.createCanonicalSchema().optional(),
    typeReference: z.lazy(() => createReferenceSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
    function: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
