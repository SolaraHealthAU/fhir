import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createGraphDefinitionCompartmentSchema } from "../graphdefinitioncompartment/schema";
import { createGraphDefinitionLinkSchema } from "../graphdefinitionlink/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionTargetSchema() {
  const baseSchema: z.ZodType<types.GraphDefinitionTarget> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    params: primitives.createStringSchema().optional(),
    _params: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
    compartment: z
      .array(z.lazy(() => createGraphDefinitionCompartmentSchema()))
      .optional(),
    link: z.array(z.lazy(() => createGraphDefinitionLinkSchema())).optional(),
  });

  return baseSchema;
}
