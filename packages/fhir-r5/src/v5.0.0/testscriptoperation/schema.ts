import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";
import { createTestScriptRequestHeaderSchema } from "../testscriptrequestheader/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptOperationSchema() {
  const baseSchema: z.ZodType<types.TestScriptOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodingSchema()).optional(),
    resource: primitives.createUriSchema().optional(),
    _resource: z.lazy(() => createElementSchema()).optional(),
    label: primitives.createStringSchema().optional(),
    _label: z.lazy(() => createElementSchema()).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    accept: primitives.createCodeSchema().optional(),
    _accept: z.lazy(() => createElementSchema()).optional(),
    contentType: primitives.createCodeSchema().optional(),
    _contentType: z.lazy(() => createElementSchema()).optional(),
    destination: primitives.createIntegerSchema().optional(),
    _destination: z.lazy(() => createElementSchema()).optional(),
    encodeRequestUrl: primitives.createBooleanSchema().optional(),
    _encodeRequestUrl: z.lazy(() => createElementSchema()).optional(),
    method: primitives.createCodeSchema().optional(),
    _method: z.lazy(() => createElementSchema()).optional(),
    origin: primitives.createIntegerSchema().optional(),
    _origin: z.lazy(() => createElementSchema()).optional(),
    params: primitives.createStringSchema().optional(),
    _params: z.lazy(() => createElementSchema()).optional(),
    requestHeader: z
      .array(z.lazy(() => createTestScriptRequestHeaderSchema()))
      .optional(),
    requestId: primitives.createIdSchema().optional(),
    _requestId: z.lazy(() => createElementSchema()).optional(),
    responseId: primitives.createIdSchema().optional(),
    _responseId: z.lazy(() => createElementSchema()).optional(),
    sourceId: primitives.createIdSchema().optional(),
    _sourceId: z.lazy(() => createElementSchema()).optional(),
    targetId: primitives.createIdSchema().optional(),
    _targetId: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createStringSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
