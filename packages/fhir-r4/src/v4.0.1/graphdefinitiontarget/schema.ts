import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createGraphDefinitionCompartmentSchema } from "../graphdefinitioncompartment/schema";
import { createGraphDefinitionLinkSchema } from "../graphdefinitionlink/schema";

/* Generated from FHIR JSON Schema */

export function createGraphDefinitionTargetSchema() {
  return getCachedSchema("GraphDefinitionTarget", () => {
    const baseSchema: z.ZodType<types.GraphDefinitionTarget> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: primitives.getCodeSchema().optional(),
      _type: createElementSchema().optional(),
      params: primitives.getStringSchema().optional(),
      _params: createElementSchema().optional(),
      profile: primitives.getCanonicalSchema().optional(),
      compartment: z.array(createGraphDefinitionCompartmentSchema()).optional(),
      link: z.array(createGraphDefinitionLinkSchema()).optional(),
    });

    return baseSchema;
  });
}
