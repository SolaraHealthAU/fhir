import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentVerificationSchema() {
  const baseSchema: z.ZodType<types.ConsentVerification> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    verified: primitives.createBooleanSchema().optional(),
    _verified: z.lazy(() => createElementSchema()).optional(),
    verificationType: z.lazy(() => createCodeableConceptSchema()).optional(),
    verifiedBy: z.lazy(() => createReferenceSchema()).optional(),
    verifiedWith: z.lazy(() => createReferenceSchema()).optional(),
    verificationDate: z.array(primitives.createDateTimeSchema()).optional(),
    _verificationDate: z.array(z.lazy(() => createElementSchema())).optional(),
  });

  return baseSchema;
}
