import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
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
  return getCachedSchema("AuditEventAgent", () => {
    const baseSchema: z.ZodType<types.AuditEventAgent> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodeableConceptSchema().optional(),
      role: z.array(createCodeableConceptSchema()).optional(),
      who: createReferenceSchema().optional(),
      altId: primitives.getStringSchema().optional(),
      _altId: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      requestor: primitives.getBooleanSchema(),
      _requestor: z.lazy(() => createElementSchema()).optional(),
      location: createReferenceSchema().optional(),
      policy: z.array(primitives.getUriSchema()).optional(),
      _policy: z.array(z.lazy(() => createElementSchema())).optional(),
      media: createCodingSchema().optional(),
      network: createAuditEventNetworkSchema().optional(),
      purposeOfUse: z.array(createCodeableConceptSchema()).optional(),
    });

    return baseSchema;
  });
}
