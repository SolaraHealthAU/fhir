import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
  createPeriodSchema,
  createDurationSchema,
  createQuantitySchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSpecimenCollectionSchema() {
  const baseSchema: z.ZodType<types.SpecimenCollection> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    collector: z.lazy(() => createReferenceSchema()).optional(),
    collectedDateTime: z.string().optional(),
    _collectedDateTime: z.lazy(() => createElementSchema()).optional(),
    collectedPeriod: z.lazy(() => createPeriodSchema()).optional(),
    duration: z.lazy(() => createDurationSchema()).optional(),
    quantity: z.lazy(() => createQuantitySchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    bodySite: z.lazy(() => createCodeableConceptSchema()).optional(),
    fastingStatusCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    fastingStatusDuration: z.lazy(() => createDurationSchema()).optional(),
  });

  return baseSchema;
}
