import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountProcedureSchema() {
  const baseSchema: z.ZodType<types.AccountProcedure> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    code: z.lazy(() => createCodeableReferenceSchema()),
    dateOfService: primitives.createDateTimeSchema().optional(),
    _dateOfService: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    packageCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    device: z.array(z.lazy(() => createReferenceSchema())).optional(),
  });

  return baseSchema;
}
