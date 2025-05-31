import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createAttachmentSchema,
  createReferenceSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContractRuleSchema() {
  return getCachedSchema("ContractRule", () => {
    const baseSchema: z.ZodType<types.ContractRule> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      contentAttachment: createAttachmentSchema().optional(),
      contentReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}
