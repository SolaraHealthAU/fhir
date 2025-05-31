import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createValueSetDesignationSchema } from "../valuesetdesignation/schema";

/* Generated from FHIR JSON Schema */

export function createValueSetConceptSchema() {
  return getCachedSchema("ValueSetConcept", () => {
    const baseSchema: z.ZodType<types.ValueSetConcept> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
      designation: z.array(createValueSetDesignationSchema()).optional(),
    });

    return baseSchema;
  });
}
