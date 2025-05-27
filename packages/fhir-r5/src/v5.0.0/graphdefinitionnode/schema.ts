import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionNodeSchema() {
  const baseSchema: z.ZodType<types.GraphDefinitionNode> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    nodeId: primitives.createIdSchema().optional(),
    _nodeId: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}
