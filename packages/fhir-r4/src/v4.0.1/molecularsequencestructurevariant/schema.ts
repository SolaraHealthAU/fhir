import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createMolecularSequenceOuterSchema } from "../molecularsequenceouter/schema";
import { createMolecularSequenceInnerSchema } from "../molecularsequenceinner/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceStructureVariantSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceStructureVariant> =
    z.object({
      id: primitives.createStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      variantType: z.lazy(() => createCodeableConceptSchema()).optional(),
      exact: primitives.createBooleanSchema().optional(),
      _exact: z.lazy(() => createElementSchema()).optional(),
      length: primitives.createIntegerSchema().optional(),
      _length: z.lazy(() => createElementSchema()).optional(),
      outer: z.lazy(() => createMolecularSequenceOuterSchema()).optional(),
      inner: z.lazy(() => createMolecularSequenceInnerSchema()).optional(),
    });

  return baseSchema;
}
