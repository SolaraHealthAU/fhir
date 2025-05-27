import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createConsentVerificationSchema() {
  return getCachedSchema("ConsentVerification", () => {
    const baseSchema: z.ZodType<types.ConsentVerification> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      verified: primitives.getBooleanSchema(),
      _verified: z.lazy(() => createElementSchema()).optional(),
      verifiedWith: createReferenceSchema().optional(),
      verificationDate: primitives.getDateTimeSchema().optional(),
      _verificationDate: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
