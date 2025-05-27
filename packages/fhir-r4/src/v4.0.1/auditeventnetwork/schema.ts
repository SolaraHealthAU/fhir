import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventNetworkSchema() {
  const baseSchema: z.ZodType<types.AuditEventNetwork> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    address: primitives.createStringSchema().optional(),
    _address: z.lazy(() => createElementSchema()).optional(),
    type: z.enum(["1", "2", "3", "4", "5"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
