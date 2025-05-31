import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemDesignationSchema() {
  return getCachedSchema("CodeSystemDesignation", () => {
    const baseSchema: z.ZodType<types.CodeSystemDesignation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: createElementSchema().optional(),
      use: createCodingSchema().optional(),
      value: primitives.getStringSchema().optional(),
      _value: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
