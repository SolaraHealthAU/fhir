import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createClaimProcedureSchema() {
  const baseSchema: z.ZodType<types.ClaimProcedure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    date: primitives.createDateTimeSchema().optional(),
    _date: z.lazy(() => createElementSchema()).optional(),
    procedureCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    procedureReference: z.lazy(() => createReferenceSchema()).optional(),
    udi: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
