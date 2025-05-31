import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createReferenceSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVerificationResultPrimarySourceSchema() {
  return getCachedSchema("VerificationResultPrimarySource", () => {
    const baseSchema: z.ZodType<types.VerificationResultPrimarySource> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        who: createReferenceSchema().optional(),
        type: z.array(createCodeableConceptSchema()).optional(),
        communicationMethod: z.array(createCodeableConceptSchema()).optional(),
        validationStatus: createCodeableConceptSchema().optional(),
        validationDate: primitives.getDateTimeSchema().optional(),
        _validationDate: createElementSchema().optional(),
        canPushUpdates: createCodeableConceptSchema().optional(),
        pushTypeAvailable: z.array(createCodeableConceptSchema()).optional(),
      });

    return baseSchema;
  });
}
