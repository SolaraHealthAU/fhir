import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImmunizationPerformerSchema() {
  return getCachedSchema("ImmunizationPerformer", () => {
    const baseSchema: z.ZodType<types.ImmunizationPerformer> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      function: createCodeableConceptSchema().optional(),
      actor: createReferenceSchema(),
    });

    return baseSchema;
  });
}
