import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createNamingSystemUniqueIdSchema() {
  const baseSchema: z.ZodType<types.NamingSystemUniqueId> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: primitives.createCodeSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    preferred: primitives.createBooleanSchema().optional(),
    _preferred: z.lazy(() => createElementSchema()).optional(),
    comment: primitives.createStringSchema().optional(),
    _comment: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    authoritative: primitives.createBooleanSchema().optional(),
    _authoritative: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
