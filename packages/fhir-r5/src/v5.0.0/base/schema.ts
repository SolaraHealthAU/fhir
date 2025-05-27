import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";

/* Generated from FHIR JSON Schema */

export function createBaseSchema() {
  const baseSchema: z.ZodType<types.Base> = z.object({});

  return baseSchema;
}
