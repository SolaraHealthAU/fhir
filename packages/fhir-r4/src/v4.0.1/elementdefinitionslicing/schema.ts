import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createElementDefinitionDiscriminatorSchema } from "../elementdefinitiondiscriminator/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionSlicingSchema() {
  return getCachedSchema("ElementDefinitionSlicing", () => {
    const baseSchema: z.ZodType<types.ElementDefinitionSlicing> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        discriminator: z
          .array(createElementDefinitionDiscriminatorSchema())
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: createElementSchema().optional(),
        ordered: primitives.getBooleanSchema().optional(),
        _ordered: createElementSchema().optional(),
        rules: z.enum(["closed", "open", "openAtEnd"]),
        _rules: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
