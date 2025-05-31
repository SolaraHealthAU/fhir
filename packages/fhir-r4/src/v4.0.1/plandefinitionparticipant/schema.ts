import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionParticipantSchema() {
  return getCachedSchema("PlanDefinitionParticipant", () => {
    const baseSchema: z.ZodType<types.PlanDefinitionParticipant> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: z
          .enum(["patient", "practitioner", "related-person", "device"])
          .optional(),
        _type: createElementSchema().optional(),
        role: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}
