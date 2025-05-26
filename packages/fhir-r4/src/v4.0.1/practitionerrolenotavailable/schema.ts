import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createPractitionerRoleNotAvailableSchema() {
  const baseSchema: z.ZodType<types.PractitionerRoleNotAvailable> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    description: primitives.createStringSchema(),
    _description: z.lazy(() => createElementSchema()).optional(),
    during: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
