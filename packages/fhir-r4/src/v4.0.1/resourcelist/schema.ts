import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";

/* Generated from FHIR JSON Schema */

export function createResourceListSchema() {
  return getCachedSchema("ResourceList", () => {
    const baseSchema: z.ZodType<types.ResourceList> = z.strictObject({});

    return baseSchema;
  });
}
