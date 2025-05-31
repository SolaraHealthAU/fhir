import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";
import { createCodeSystemDesignationSchema } from "../codesystemdesignation/schema";
import { createCodeSystemProperty1Schema } from "../codesystemproperty1/schema";

/* Generated from FHIR JSON Schema */

export function createCodeSystemConceptSchema() {
  return getCachedSchema("CodeSystemConcept", () => {
    const baseSchema: z.ZodType<types.CodeSystemConcept> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      code: primitives.getCodeSchema(),
      _code: createElementSchema().optional(),
      display: primitives.getStringSchema().optional(),
      _display: createElementSchema().optional(),
      definition: primitives.getStringSchema().optional(),
      _definition: createElementSchema().optional(),
      designation: z.array(createCodeSystemDesignationSchema()).optional(),
      property: z.array(createCodeSystemProperty1Schema()).optional(),
      concept: z.array(createCodeSystemConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
