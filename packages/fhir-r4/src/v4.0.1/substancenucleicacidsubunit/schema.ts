import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("SubstanceNucleicAcidSubunit", () => {
    const baseSchema: z.ZodType<types.SubstanceNucleicAcidSubunit> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
        modifierExtension: z
          .array(z.lazy(() => createExtensionSchema()))
          .optional(),
        subunit: primitives.getIntegerSchema().optional(),
        _subunit: z.lazy(() => createElementSchema()).optional(),
        sequence: primitives.getStringSchema().optional(),
        _sequence: z.lazy(() => createElementSchema()).optional(),
        length: primitives.getIntegerSchema().optional(),
        _length: z.lazy(() => createElementSchema()).optional(),
        sequenceAttachment: createAttachmentSchema().optional(),
        fivePrime: createCodeableConceptSchema().optional(),
        threePrime: createCodeableConceptSchema().optional(),
        linkage: z.array(createSubstanceNucleicAcidLinkageSchema()).optional(),
        sugar: z.array(createSubstanceNucleicAcidSugarSchema()).optional(),
      });

    return baseSchema;
  });
}
