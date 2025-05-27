import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createElementDefinitionDiscriminatorSchema } from "../elementdefinitiondiscriminator/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionSlicingSchema() {
  const baseSchema: z.ZodType<types.ElementDefinitionSlicing> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    discriminator: z
      .array(z.lazy(() => createElementDefinitionDiscriminatorSchema()))
      .optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    ordered: primitives.createBooleanSchema().optional(),
    _ordered: z.lazy(() => createElementSchema()).optional(),
    rules: z.enum(["closed", "open", "openAtEnd"]),
    _rules: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
