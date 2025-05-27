import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createPeriodSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerQualificationSchema() {
  return getCachedSchema("PractitionerQualification", () => {
    const baseSchema: z.ZodType<types.PractitionerQualification> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.array(z.lazy(() => createIdentifierSchema())).optional(),
        code: createCodeableConceptSchema(),
        period: createPeriodSchema().optional(),
        issuer: createReferenceSchema().optional(),
      });

    return baseSchema;
  });
}
