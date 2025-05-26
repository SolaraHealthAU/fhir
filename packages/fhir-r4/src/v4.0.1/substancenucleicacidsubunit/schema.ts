import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createCodeableConceptSchema,
} from "../core/schema";
import { createSubstanceNucleicAcidLinkageSchema } from "../substancenucleicacidlinkage/schema";
import { createSubstanceNucleicAcidSugarSchema } from "../substancenucleicacidsugar/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceNucleicAcidSubunitSchema() {
  const baseSchema: z.ZodType<types.SubstanceNucleicAcidSubunit> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    subunit: primitives.createIntegerSchema().optional(),
    _subunit: z.lazy(() => createElementSchema()).optional(),
    sequence: primitives.createStringSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    length: primitives.createIntegerSchema().optional(),
    _length: z.lazy(() => createElementSchema()).optional(),
    sequenceAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    fivePrime: z.lazy(() => createCodeableConceptSchema()).optional(),
    threePrime: z.lazy(() => createCodeableConceptSchema()).optional(),
    linkage: z
      .array(z.lazy(() => createSubstanceNucleicAcidLinkageSchema()))
      .optional(),
    sugar: z
      .array(z.lazy(() => createSubstanceNucleicAcidSugarSchema()))
      .optional(),
  });

  return baseSchema;
}
