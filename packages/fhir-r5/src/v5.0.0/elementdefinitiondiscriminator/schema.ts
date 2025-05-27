import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionDiscriminatorSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionDiscriminator> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z
      .enum(["value", "exists", "pattern", "type", "profile", "position"])
      .optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    path: primitives.createStringSchema().optional(),
    _path: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
