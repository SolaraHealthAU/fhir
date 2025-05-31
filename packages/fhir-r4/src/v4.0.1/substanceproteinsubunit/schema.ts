import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceProteinSubunitSchema() {
  return getCachedSchema("SubstanceProteinSubunit", () => {
    const baseSchema: z.ZodType<types.SubstanceProteinSubunit> = z.strictObject(
      {
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        subunit: primitives.getIntegerSchema().optional(),
        _subunit: createElementSchema().optional(),
        sequence: primitives.getStringSchema().optional(),
        _sequence: createElementSchema().optional(),
        length: primitives.getIntegerSchema().optional(),
        _length: createElementSchema().optional(),
        sequenceAttachment: createAttachmentSchema().optional(),
        nTerminalModificationId: createIdentifierSchema().optional(),
        nTerminalModification: primitives.getStringSchema().optional(),
        _nTerminalModification: createElementSchema().optional(),
        cTerminalModificationId: createIdentifierSchema().optional(),
        cTerminalModification: primitives.getStringSchema().optional(),
        _cTerminalModification: createElementSchema().optional(),
      },
    );

    return baseSchema;
  });
}
