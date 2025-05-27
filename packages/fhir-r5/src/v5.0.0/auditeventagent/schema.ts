import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createAuditEventAgentSchema() {
  const baseSchema: z.ZodType<types.AuditEventAgent> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    role: z.array(z.lazy(() => createCodeableConceptSchema())).optional(),
    who: z.lazy(() => createReferenceSchema()),
    requestor: primitives.createBooleanSchema().optional(),
    _requestor: z.lazy(() => createElementSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    policy: z.array(primitives.createUriSchema()).optional(),
    _policy: z.array(z.lazy(() => createElementSchema())).optional(),
    networkReference: z.lazy(() => createReferenceSchema()).optional(),
    networkUri: z.string().optional(),
    _networkUri: z.lazy(() => createElementSchema()).optional(),
    networkString: z.string().optional(),
    _networkString: z.lazy(() => createElementSchema()).optional(),
    authorization: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
