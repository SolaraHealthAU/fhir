import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractFriendlySchema() {
  const baseSchema: z.ZodType<types.ContractFriendly> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    contentAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    contentReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}
