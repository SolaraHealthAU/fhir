import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceSpecificationCodeSchema() {
  return getCachedSchema("SubstanceSpecificationCode", () => {
    const baseSchema: z.ZodType<types.SubstanceSpecificationCode> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        code: createCodeableConceptSchema().optional(),
        status: createCodeableConceptSchema().optional(),
        statusDate: primitives.getDateTimeSchema().optional(),
        _statusDate: z.lazy(() => createElementSchema()).optional(),
        comment: primitives.getStringSchema().optional(),
        _comment: z.lazy(() => createElementSchema()).optional(),
        source: z.array(createReferenceSchema()).optional(),
      });

    return baseSchema;
  });
}
