import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventNetworkSchema() {
  return getCachedSchema("AuditEventNetwork", () => {
    const baseSchema: z.ZodType<types.AuditEventNetwork> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      address: primitives.getStringSchema().optional(),
      _address: createElementSchema().optional(),
      type: z.enum(["1", "2", "3", "4", "5"]).optional(),
      _type: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
