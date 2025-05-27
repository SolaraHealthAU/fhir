import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createPlanDefinitionOptionSchema } from "../plandefinitionoption/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionActorSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionActor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createMarkdownSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    option: z.array(z.lazy(() => createPlanDefinitionOptionSchema())),
  });

  return baseSchema;
}
