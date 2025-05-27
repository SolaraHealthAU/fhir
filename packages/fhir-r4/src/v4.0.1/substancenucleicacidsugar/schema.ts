import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createIdentifierSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceNucleicAcidSugarSchema() {
  return getCachedSchema("SubstanceNucleicAcidSugar", () => {
    const baseSchema: z.ZodType<types.SubstanceNucleicAcidSugar> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        identifier: z.lazy(() => createIdentifierSchema()).optional(),
        name: primitives.getStringSchema().optional(),
        _name: z.lazy(() => createElementSchema()).optional(),
        residueSite: primitives.getStringSchema().optional(),
        _residueSite: z.lazy(() => createElementSchema()).optional(),
      });

    return baseSchema;
  });
}
