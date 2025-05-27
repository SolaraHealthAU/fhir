import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRelatedPersonCommunicationSchema() {
  const baseSchema: z.ZodType<types.RelatedPersonCommunication> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    language: z.lazy(() => createCodeableConceptSchema()),
    preferred: primitives.createBooleanSchema().optional(),
    _preferred: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
