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
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        discriminator: z
          .array(createElementDefinitionDiscriminatorSchema())
          .optional(),
        description: primitives.getStringSchema().optional(),
        _description: z.lazy(() => createElementSchema()).optional(),
        ordered: primitives.getBooleanSchema().optional(),
        _ordered: z.lazy(() => createElementSchema()).optional(),
        rules: z.enum(["closed", "open", "openAtEnd"]),
        _rules: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
