import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createCodingSchema,
  createElementSchema,
} from "../core/schema";
import { createTestScriptRequestHeaderSchema } from "../testscriptrequestheader/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptOperationSchema() {
  return getCachedSchema("TestScriptOperation", () => {
    const baseSchema: z.ZodType<types.TestScriptOperation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      type: createCodingSchema().optional(),
      resource: primitives.getCodeSchema().optional(),
      _resource: z.lazy(() => createElementSchema()).optional(),
      label: primitives.getStringSchema().optional(),
      _label: z.lazy(() => createElementSchema()).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      accept: primitives.getCodeSchema().optional(),
      _accept: z.lazy(() => createElementSchema()).optional(),
      contentType: primitives.getCodeSchema().optional(),
      _contentType: z.lazy(() => createElementSchema()).optional(),
      destination: primitives.getIntegerSchema().optional(),
      _destination: z.lazy(() => createElementSchema()).optional(),
      encodeRequestUrl: primitives.getBooleanSchema().optional(),
      _encodeRequestUrl: z.lazy(() => createElementSchema()).optional(),
      method: z
        .enum(["delete", "get", "options", "patch", "post", "put", "head"])
        .optional(),
      _method: z.lazy(() => createElementSchema()).optional(),
      origin: primitives.getIntegerSchema().optional(),
      _origin: z.lazy(() => createElementSchema()).optional(),
      params: primitives.getStringSchema().optional(),
      _params: z.lazy(() => createElementSchema()).optional(),
      requestHeader: z.array(createTestScriptRequestHeaderSchema()).optional(),
      requestId: primitives.getIdSchema().optional(),
      _requestId: z.lazy(() => createElementSchema()).optional(),
      responseId: primitives.getIdSchema().optional(),
      _responseId: z.lazy(() => createElementSchema()).optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: z.lazy(() => createElementSchema()).optional(),
      targetId: primitives.getIdSchema().optional(),
      _targetId: z.lazy(() => createElementSchema()).optional(),
      url: primitives.getStringSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
