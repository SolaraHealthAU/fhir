import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createImplementationGuideResourceSchema() {
  const baseSchema: z.ZodType<types.ImplementationGuideResource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    reference: z.lazy(() => createReferenceSchema()),
    fhirVersion: z.array(z.any()).optional(),
    _fhirVersion: z.array(z.lazy(() => createElementSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    exampleBoolean: z.boolean().optional(),
    _exampleBoolean: z.lazy(() => createElementSchema()).optional(),
    exampleCanonical: z.string().optional(),
    _exampleCanonical: z.lazy(() => createElementSchema()).optional(),
    groupingId: primitives.createIdSchema().optional(),
    _groupingId: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
