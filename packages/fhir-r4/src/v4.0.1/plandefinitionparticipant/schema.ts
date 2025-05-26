import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPlanDefinitionParticipantSchema() {
  const baseSchema: z.ZodType<types.PlanDefinitionParticipant> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z
      .enum(["patient", "practitioner", "related-person", "device"])
      .optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    role: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
