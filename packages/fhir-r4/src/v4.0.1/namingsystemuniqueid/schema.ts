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
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: z.enum(["oid", "uuid", "uri", "other"]),
      _type: z.lazy(() => createElementSchema()).optional(),
      value: primitives.getStringSchema(),
      _value: z.lazy(() => createElementSchema()).optional(),
      preferred: primitives.getBooleanSchema().optional(),
      _preferred: z.lazy(() => createElementSchema()).optional(),
      comment: primitives.getStringSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}
