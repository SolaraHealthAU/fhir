import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionCompartmentSchema() {
  return getCachedSchema("GraphDefinitionCompartment", () => {
    const baseSchema: z.ZodType<types.GraphDefinitionCompartment> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        use: z.enum(["condition", "requirement"]).optional(),
        _use: createElementSchema().optional(),
        code: primitives.getCodeSchema().optional(),
        _code: createElementSchema().optional(),
        rule: z
          .enum(["identical", "matching", "different", "custom"])
          .optional(),
        _rule: createElementSchema().optional(),
        expression: primitives.getStringSchema().optional(),
        _expression: createElementSchema().optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
