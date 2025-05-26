import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultPrimarySourceSchema() {
  const baseSchema: z.ZodType<types.VerificationResultPrimarySource> = z.object(
    {
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      who: z.lazy(() => createReferenceSchema()).optional(),
      type: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
      communicationMethod: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
      validationStatus: z.lazy(() => createCodeableConceptSchema()).optional(),
      validationDate: primitives.createDateTimeSchema().optional(),
      _validationDate: z.lazy(() => createElementSchema()).optional(),
      canPushUpdates: z.lazy(() => createCodeableConceptSchema()).optional(),
      pushTypeAvailable: z
        .array(z.lazy(() => createCodeableConceptSchema()))
        .optional(),
    },
  );

  return baseSchema;
}
