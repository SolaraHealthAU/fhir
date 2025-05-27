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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        use: z.enum(["condition", "requirement"]).optional(),
        _use: z.lazy(() => createElementSchema()).optional(),
        code: primitives.getCodeSchema().optional(),
        _code: z.lazy(() => createElementSchema()).optional(),
        rule: z
          .enum(["identical", "matching", "different", "custom"])
          .optional(),
        _rule: z.lazy(() => createElementSchema()).optional(),
        expression: primitives.getStringSchema().optional(),
        _expression: z.lazy(() => createElementSchema()).optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
