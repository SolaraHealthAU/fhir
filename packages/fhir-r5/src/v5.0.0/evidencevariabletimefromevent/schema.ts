import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAnnotationSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createQuantitySchema,
  createRangeSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createEvidenceVariableTimeFromEventSchema() {
  const baseSchema: z.ZodType<types.EvidenceVariableTimeFromEvent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    note: z.array(z.lazy(() => createAnnotationSchema())).optional(),
    eventCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    eventReference: z.lazy(() => createReferenceSchema()).optional(),
    eventDateTime: z.string().optional(),
    _eventDateTime: z.lazy(() => createElementSchema()).optional(),
    eventId: z.string().optional(),
    _eventId: z.lazy(() => createElementSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    range: z.lazy(() => createRangeSchema()).optional(),
  });

  return baseSchema;
}
