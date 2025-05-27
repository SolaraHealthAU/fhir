import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRegulatedAuthorizationCaseSchema() {
  const baseSchema: z.ZodType<types.RegulatedAuthorizationCase> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    status: z.lazy(() => createCodeableConceptSchema()).optional(),
    datePeriod: z.lazy(() => createPeriodSchema()).optional(),
    dateDateTime: z.string().optional(),
    _dateDateTime: z.lazy(() => createElementSchema()).optional(),
    application: z
      .array(z.lazy(() => createRegulatedAuthorizationCaseSchema()))
      .optional(),
  });

  return baseSchema;
}
