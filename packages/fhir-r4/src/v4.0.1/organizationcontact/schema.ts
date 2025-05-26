import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createHumanNameSchema,
  createContactPointSchema,
  createAddressSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createOrganizationContactSchema() {
  const baseSchema: z.ZodType<types.OrganizationContact> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    purpose: z.lazy(() => createCodeableConceptSchema()).optional(),
    name: z.lazy(() => createHumanNameSchema()).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
    address: z.lazy(() => createAddressSchema()).optional(),
  });

  return baseSchema;
}
