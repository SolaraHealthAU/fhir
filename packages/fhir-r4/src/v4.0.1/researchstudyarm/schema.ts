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

export function createResearchStudyArmSchema() {
  return getCachedSchema("ResearchStudyArm", () => {
    const baseSchema: z.ZodType<types.ResearchStudyArm> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
