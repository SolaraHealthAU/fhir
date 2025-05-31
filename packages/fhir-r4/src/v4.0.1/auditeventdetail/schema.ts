import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventDetailSchema() {
  return getCachedSchema("AuditEventDetail", () => {
    const baseSchema: z.ZodType<types.AuditEventDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: primitives.getStringSchema().optional(),
      _type: createElementSchema().optional(),
      valueString: z.string().optional(),
      _valueString: createElementSchema().optional(),
      valueBase64Binary: z.string().optional(),
      _valueBase64Binary: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
