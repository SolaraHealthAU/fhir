import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionApplicabilitySchema() {
  return getCachedSchema("ChargeItemDefinitionApplicability", () => {
    const baseSchema: z.ZodType<types.ChargeItemDefinitionApplicability> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        language: primitives.getStringSchema().optional(),
        _language: z.lazy(() => createElementSchema()).optional(),
        expression: primitives.getStringSchema().optional(),
        _expression: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
