import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createRelatedPersonCommunicationSchema() {
  return getCachedSchema("RelatedPersonCommunication", () => {
    const baseSchema: z.ZodType<types.RelatedPersonCommunication> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        language: createCodeableConceptSchema(),
        preferred: primitives.getBooleanSchema().optional(),
        _preferred: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
