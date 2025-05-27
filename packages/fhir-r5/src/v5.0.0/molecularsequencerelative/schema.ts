import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createRangeSchema,
} from "../core/schema";
import { createMolecularSequenceStartingSequenceSchema } from "../molecularsequencestartingsequence/schema";
import { createMolecularSequenceEditSchema } from "../molecularsequenceedit/schema";

/* Generated from FHIR JSON Schema */

export function createMolecularSequenceRelativeSchema() {
  const baseSchema: z.ZodType<types.MolecularSequenceRelative> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    coordinateSystem: z.lazy(() => createCodeableConceptSchema()),
    ordinalPosition: primitives.createIntegerSchema().optional(),
    _ordinalPosition: z.lazy(() => createElementSchema()).optional(),
    sequenceRange: z.lazy(() => createRangeSchema()).optional(),
    startingSequence: z
      .lazy(() => createMolecularSequenceStartingSequenceSchema())
      .optional(),
    edit: z.array(z.lazy(() => createMolecularSequenceEditSchema())).optional(),
  });

  return baseSchema;
}
