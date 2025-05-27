import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createGraphDefinitionCompartmentSchema } from "../graphdefinitioncompartment/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionLinkSchema() {
  const baseSchema: z.ZodType<types.GraphDefinitionLink> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createIntegerSchema().optional(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
    sourceId: primitives.createIdSchema().optional(),
    _sourceId: z.lazy(() => createElementSchema()).optional(),
    path: primitives.createStringSchema().optional(),
    _path: z.lazy(() => createElementSchema()).optional(),
    sliceName: primitives.createStringSchema().optional(),
    _sliceName: z.lazy(() => createElementSchema()).optional(),
    targetId: primitives.createIdSchema().optional(),
    _targetId: z.lazy(() => createElementSchema()).optional(),
    params: primitives.createStringSchema().optional(),
    _params: z.lazy(() => createElementSchema()).optional(),
    compartment: z
      .array(z.lazy(() => createGraphDefinitionCompartmentSchema()))
      .optional(),
  });

  return baseSchema;
}
