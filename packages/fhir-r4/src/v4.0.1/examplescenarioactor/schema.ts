import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioActorSchema() {
  return getCachedSchema("ExampleScenarioActor", () => {
    const baseSchema: z.ZodType<types.ExampleScenarioActor> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      actorId: primitives.getStringSchema(),
      _actorId: z.lazy(() => createElementSchema()).optional(),
      type: z.enum(["person", "entity"]),
      _type: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getMarkdownSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
