import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDocumentReferenceContextSchema() {
  return getCachedSchema("DocumentReferenceContext", () => {
    const baseSchema: z.ZodType<types.DocumentReferenceContext> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        encounter: z.array(createReferenceSchema()).optional(),
        event: z.array(createCodeableConceptSchema()).optional(),
        period: createPeriodSchema().optional(),
        facilityType: createCodeableConceptSchema().optional(),
        practiceSetting: createCodeableConceptSchema().optional(),
        sourcePatientInfo: createReferenceSchema().optional(),
        related: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
