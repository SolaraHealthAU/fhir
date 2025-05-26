import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAttachmentSchema,
  createIdentifierSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createSubstanceProteinSubunitSchema() {
  const baseSchema: z.ZodType<types.SubstanceProteinSubunit> = z.object({
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
    nTerminalModificationId: z.lazy(() => createIdentifierSchema()).optional(),
    nTerminalModification: primitives.createStringSchema().optional(),
    _nTerminalModification: z.lazy(() => createElementSchema()).optional(),
    cTerminalModificationId: z.lazy(() => createIdentifierSchema()).optional(),
    cTerminalModification: primitives.createStringSchema().optional(),
    _cTerminalModification: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
