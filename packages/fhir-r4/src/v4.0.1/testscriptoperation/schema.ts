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
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      type: createCodingSchema().optional(),
      resource: primitives.getCodeSchema().optional(),
      _resource: createElementSchema().optional(),
      label: primitives.getStringSchema().optional(),
      _label: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      accept: primitives.getCodeSchema().optional(),
      _accept: createElementSchema().optional(),
      contentType: primitives.getCodeSchema().optional(),
      _contentType: createElementSchema().optional(),
      destination: primitives.getIntegerSchema().optional(),
      _destination: createElementSchema().optional(),
      encodeRequestUrl: primitives.getBooleanSchema().optional(),
      _encodeRequestUrl: createElementSchema().optional(),
      method: z
        .enum(["delete", "get", "options", "patch", "post", "put", "head"])
        .optional(),
      _method: createElementSchema().optional(),
      origin: primitives.getIntegerSchema().optional(),
      _origin: createElementSchema().optional(),
      params: primitives.getStringSchema().optional(),
      _params: createElementSchema().optional(),
      requestHeader: z.array(createTestScriptRequestHeaderSchema()).optional(),
      requestId: primitives.getIdSchema().optional(),
      _requestId: createElementSchema().optional(),
      responseId: primitives.getIdSchema().optional(),
      _responseId: createElementSchema().optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: createElementSchema().optional(),
      targetId: primitives.getIdSchema().optional(),
      _targetId: createElementSchema().optional(),
      url: primitives.getStringSchema().optional(),
      _url: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
