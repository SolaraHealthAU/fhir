import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
  createContactPointSchema,
  createExtendedContactDetailSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createVirtualServiceDetailSchema() {
  const baseSchema: z.ZodType<types.VirtualServiceDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    channelType: z.lazy(() => createCodingSchema()).optional(),
    addressUrl: z.string().optional(),
    _addressUrl: z.lazy(() => createElementSchema()).optional(),
    addressString: z.string().optional(),
    _addressString: z.lazy(() => createElementSchema()).optional(),
    addressContactPoint: z.lazy(() => createContactPointSchema()).optional(),
    addressExtendedContactDetail: z
      .lazy(() => createExtendedContactDetailSchema())
      .optional(),
    additionalInfo: z.array(primitives.createUrlSchema()).optional(),
    _additionalInfo: z.array(z.lazy(() => createElementSchema())).optional(),
    maxParticipants: primitives.createPositiveIntSchema().optional(),
    _maxParticipants: z.lazy(() => createElementSchema()).optional(),
    sessionKey: primitives.createStringSchema().optional(),
    _sessionKey: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
