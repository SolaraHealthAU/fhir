import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerQualificationSchema() {
  const baseSchema: z.ZodType<types.PractitionerQualification> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
    code: z.lazy(() => createCodeableConceptSchema()),
    period: z.lazy(() => createPeriodSchema()).optional(),
    issuer: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
