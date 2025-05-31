import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createReferenceSchema } from "../core/schema";
import { createAdverseEventCausalitySchema } from "../adverseeventcausality/schema";

/* Generated from FHIR JSON Schema */

export function createAdverseEventSuspectEntitySchema() {
  return getCachedSchema("AdverseEventSuspectEntity", () => {
    const baseSchema: z.ZodType<types.AdverseEventSuspectEntity> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        instance: createReferenceSchema(),
        causality: z.array(createAdverseEventCausalitySchema()).optional(),
      });

    return baseSchema;
  });
}
