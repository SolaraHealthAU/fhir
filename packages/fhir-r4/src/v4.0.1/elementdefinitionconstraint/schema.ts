import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionConstraintSchema() {
  return getCachedSchema("ElementDefinitionConstraint", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionConstraint> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        key: primitives.getIdSchema(),
        _key: z.lazy(() => createElementSchema()).optional(),
        requirements: primitives.getStringSchema().optional(),
        _requirements: z.lazy(() => createElementSchema()).optional(),
        severity: z.enum(["error", "warning"]),
        _severity: z.lazy(() => createElementSchema()).optional(),
        human: primitives.getStringSchema(),
        _human: z.lazy(() => createElementSchema()).optional(),
        expression: primitives.getStringSchema().optional(),
        _expression: z.lazy(() => createElementSchema()).optional(),
        xpath: primitives.getStringSchema().optional(),
        _xpath: z.lazy(() => createElementSchema()).optional(),
        source: primitives.getCanonicalSchema().optional(),
      });

    return baseSchema;
  });
}
