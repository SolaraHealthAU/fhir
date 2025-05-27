import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";

/* Generated from FHIR JSON Schema */

export function createResourceListSchema() {
  const baseSchema: z.ZodType<types.ResourceList> = z.object({});

  return baseSchema;
}
