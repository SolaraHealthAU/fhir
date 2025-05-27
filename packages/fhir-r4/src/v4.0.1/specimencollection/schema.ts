import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SpecimenCollection", () => {
    const baseSchema: z.ZodType<types.SpecimenCollection> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      collector: createReferenceSchema().optional(),
      collectedDateTime: z.string().optional(),
      _collectedDateTime: z.lazy(() => createElementSchema()).optional(),
      collectedPeriod: createPeriodSchema().optional(),
      duration: createDurationSchema().optional(),
      quantity: createQuantitySchema().optional(),
      method: createCodeableConceptSchema().optional(),
      bodySite: createCodeableConceptSchema().optional(),
      fastingStatusCodeableConcept: createCodeableConceptSchema().optional(),
      fastingStatusDuration: createDurationSchema().optional(),
    });

    return baseSchema;
  });
}
