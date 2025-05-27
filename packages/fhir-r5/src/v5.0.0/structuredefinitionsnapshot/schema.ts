import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema } from "../core/schema";
import { createElementDefinitionSchema } from "../elementdefinition/schema";

/* Generated from FHIR JSON Schema */

export function createStructureDefinitionSnapshotSchema() {
  const baseSchema: z.ZodType<types.StructureDefinitionSnapshot> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    element: z.array(z.lazy(() => createElementDefinitionSchema())),
  });

  return baseSchema;
}
