import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceNucleicAcidLinkageSchema() {
  const baseSchema: z.ZodType<types.SubstanceNucleicAcidLinkage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    connectivity: primitives.createStringSchema().optional(),
    _connectivity: z.lazy(() => createElementSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    residueSite: primitives.createStringSchema().optional(),
    _residueSite: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
