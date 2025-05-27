import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
} from "../core/schema";
import { createMolecularSequenceOuterSchema } from "../molecularsequenceouter/schema";
import { createMolecularSequenceInnerSchema } from "../molecularsequenceinner/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceStructureVariantSchema() {
  return getCachedSchema("MolecularSequenceStructureVariant", () => {
    const baseSchema: z.ZodType<types.MolecularSequenceStructureVariant> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        variantType: createCodeableConceptSchema().optional(),
        exact: primitives.getBooleanSchema().optional(),
        _exact: z.lazy(() => createElementSchema()).optional(),
        length: primitives.getIntegerSchema().optional(),
        _length: z.lazy(() => createElementSchema()).optional(),
        outer: createMolecularSequenceOuterSchema().optional(),
        inner: createMolecularSequenceInnerSchema().optional(),
      });

    return baseSchema;
  });
}
