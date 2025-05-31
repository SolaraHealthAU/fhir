import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNamingSystemUniqueIdSchema() {
  return getCachedSchema("NamingSystemUniqueId", () => {
    const baseSchema: z.ZodType<types.NamingSystemUniqueId> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: z.enum(["oid", "uuid", "uri", "other"]),
      _type: createElementSchema().optional(),
      value: primitives.getStringSchema(),
      _value: createElementSchema().optional(),
      preferred: primitives.getBooleanSchema().optional(),
      _preferred: createElementSchema().optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: createElementSchema().optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
