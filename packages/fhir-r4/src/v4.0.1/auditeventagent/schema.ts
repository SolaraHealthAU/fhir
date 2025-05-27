import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createElementSchema,
  createCodingSchema,
} from "../core/schema";
import { createAuditEventNetworkSchema } from "../auditeventnetwork/schema";

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
    who: z.lazy(() => createReferenceSchema()).optional(),
    altId: primitives.createStringSchema().optional(),
    _altId: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    requestor: primitives.createBooleanSchema(),
    _requestor: z.lazy(() => createElementSchema()).optional(),
    location: z.lazy(() => createReferenceSchema()).optional(),
    policy: z.array(primitives.createUriSchema()).optional(),
    _policy: z.array(z.lazy(() => createElementSchema())).optional(),
    media: z.lazy(() => createCodingSchema()).optional(),
    network: z.lazy(() => createAuditEventNetworkSchema()).optional(),
    purposeOfUse: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
  });

  return baseSchema;
}
