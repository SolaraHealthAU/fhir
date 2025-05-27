import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createCapabilityStatementSecuritySchema() {
  return getCachedSchema("CapabilityStatementSecurity", () => {
    const baseSchema: z.ZodType<types.CapabilityStatementSecurity> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        cors: primitives.getBooleanSchema().optional(),
        _cors: z.lazy(() => createElementSchema()).optional(),
        service: z.array(createCodeableConceptSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
