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
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        key: primitives.getIdSchema(),
        _key: createElementSchema().optional(),
        requirements: primitives.getStringSchema().optional(),
        _requirements: createElementSchema().optional(),
        severity: z.enum(["error", "warning"]),
        _severity: createElementSchema().optional(),
        human: primitives.getStringSchema(),
        _human: createElementSchema().optional(),
        expression: primitives.getStringSchema().optional(),
        _expression: createElementSchema().optional(),
        xpath: primitives.getStringSchema().optional(),
        _xpath: createElementSchema().optional(),
        source: primitives.getCanonicalSchema().optional(),
      });

    return baseSchema;
  });
}
