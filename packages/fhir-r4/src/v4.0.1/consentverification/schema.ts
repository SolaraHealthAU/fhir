import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
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
    verified: primitives.createBooleanSchema(),
    _verified: z.lazy(() => createElementSchema()).optional(),
    verifiedWith: z.lazy(() => createReferenceSchema()).optional(),
    verificationDate: primitives.createDateTimeSchema().optional(),
    _verificationDate: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
