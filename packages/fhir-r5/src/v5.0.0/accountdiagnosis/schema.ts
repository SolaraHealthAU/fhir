import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableReferenceSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAccountDiagnosisSchema() {
  const baseSchema: z.ZodType<types.AccountDiagnosis> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createPositiveIntSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    condition: z.lazy(() => createCodeableReferenceSchema()),
    dateOfDiagnosis: primitives.createDateTimeSchema().optional(),
    _dateOfDiagnosis: z.lazy(() => createElementSchema()).optional(),
    type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    onAdmission: primitives.createBooleanSchema().optional(),
    _onAdmission: z.lazy(() => createElementSchema()).optional(),
    packageCode: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
