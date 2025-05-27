import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createContactDetailSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createContributorSchema() {
  const baseSchema: z.ZodType<types.Contributor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: z.enum(["author", "editor", "reviewer", "endorser"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
  });

  return baseSchema;
}
