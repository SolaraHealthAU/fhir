import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionCompartmentSchema() {
  const baseSchema: z.ZodType<types.GraphDefinitionCompartment> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    use: z.enum(["condition", "requirement"]).optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    rule: z.enum(["identical", "matching", "different", "custom"]).optional(),
    _rule: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
