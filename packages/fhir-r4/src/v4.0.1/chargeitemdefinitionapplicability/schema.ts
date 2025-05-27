import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createChargeItemDefinitionApplicabilitySchema() {
  const baseSchema: z.ZodType<types.ChargeItemDefinitionApplicability> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      description: primitives.createStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      language: primitives.createStringSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      expression: primitives.createStringSchema().optional(),
      _expression: z.lazy(() => createElementSchema()).optional(),
    });

  return baseSchema;
}
