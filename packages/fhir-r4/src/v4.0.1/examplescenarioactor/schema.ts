import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createExampleScenarioActorSchema() {
  const baseSchema: z.ZodType<types.ExampleScenarioActor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    actorId: primitives.createStringSchema(),
    _actorId: z.lazy(() => createElementSchema()).optional(),
    type: z.enum(["person", "entity"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
