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
        nTerminalModificationId: z
          .lazy(() => createIdentifierSchema())
          .optional(),
        nTerminalModification: primitives.getStringSchema().optional(),
        _nTerminalModification: z.lazy(() => createElementSchema()).optional(),
        cTerminalModificationId: z
          .lazy(() => createIdentifierSchema())
          .optional(),
        cTerminalModification: primitives.getStringSchema().optional(),
        _cTerminalModification: z.lazy(() => createElementSchema()).optional(),
      },
    );

    return baseSchema;
  });
}
