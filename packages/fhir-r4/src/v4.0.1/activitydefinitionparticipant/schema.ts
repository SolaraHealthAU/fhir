import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
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
    type: primitives.createCodeSchema(),
    _type: z.lazy(() => createElementSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
