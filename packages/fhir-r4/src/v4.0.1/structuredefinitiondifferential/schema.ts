import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema } from "../core/schema";
import { createElementDefinitionSchema } from "../elementdefinition/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionDifferentialSchema() {
  return getCachedSchema("StructureDefinitionDifferential", () => {
    const baseSchema: z.ZodType<types.StructureDefinitionDifferential> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        element: z.array(createElementDefinitionSchema()),
      });

    return baseSchema;
  });
}
