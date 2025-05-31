import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceNucleicAcidLinkageSchema() {
  return getCachedSchema("SubstanceNucleicAcidLinkage", () => {
    const baseSchema: z.ZodType<types.SubstanceNucleicAcidLinkage> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        connectivity: primitives.getStringSchema().optional(),
        _connectivity: createElementSchema().optional(),
        identifier: createIdentifierSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        residueSite: primitives.getStringSchema().optional(),
        _residueSite: createElementSchema().optional(),
      });

    return baseSchema;
  });
}
