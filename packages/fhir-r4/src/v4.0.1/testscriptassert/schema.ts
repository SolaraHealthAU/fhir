import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createExtensionSchema, createElementSchema } from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createTestScriptAssertSchema() {
  return getCachedSchema("TestScriptAssert", () => {
    const baseSchema: z.ZodType<types.TestScriptAssert> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(createExtensionSchema()).optional(),
      modifierExtension: z.array(createExtensionSchema()).optional(),
      label: primitives.getStringSchema().optional(),
      _label: createElementSchema().optional(),
      description: primitives.getStringSchema().optional(),
      _description: createElementSchema().optional(),
      direction: z.enum(["response", "request"]).optional(),
      _direction: createElementSchema().optional(),
      compareToSourceId: primitives.getStringSchema().optional(),
      _compareToSourceId: createElementSchema().optional(),
      compareToSourceExpression: primitives.getStringSchema().optional(),
      _compareToSourceExpression: createElementSchema().optional(),
      compareToSourcePath: primitives.getStringSchema().optional(),
      _compareToSourcePath: createElementSchema().optional(),
      contentType: primitives.getCodeSchema().optional(),
      _contentType: createElementSchema().optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: createElementSchema().optional(),
      headerField: primitives.getStringSchema().optional(),
      _headerField: createElementSchema().optional(),
      minimumId: primitives.getStringSchema().optional(),
      _minimumId: createElementSchema().optional(),
      navigationLinks: primitives.getBooleanSchema().optional(),
      _navigationLinks: createElementSchema().optional(),
      operator: z
        .enum([
          "equals",
          "notEquals",
          "in",
          "notIn",
          "greaterThan",
          "lessThan",
          "empty",
          "notEmpty",
          "contains",
          "notContains",
          "eval",
        ])
        .optional(),
      _operator: createElementSchema().optional(),
      path: primitives.getStringSchema().optional(),
      _path: createElementSchema().optional(),
      requestMethod: z
        .enum(["delete", "get", "options", "patch", "post", "put", "head"])
        .optional(),
      _requestMethod: createElementSchema().optional(),
      requestURL: primitives.getStringSchema().optional(),
      _requestURL: createElementSchema().optional(),
      resource: primitives.getCodeSchema().optional(),
      _resource: createElementSchema().optional(),
      response: z
        .enum([
          "okay",
          "created",
          "noContent",
          "notModified",
          "bad",
          "forbidden",
          "notFound",
          "methodNotAllowed",
          "conflict",
          "gone",
          "preconditionFailed",
          "unprocessable",
        ])
        .optional(),
      _response: createElementSchema().optional(),
      responseCode: primitives.getStringSchema().optional(),
      _responseCode: createElementSchema().optional(),
      sourceId: primitives.getIdSchema().optional(),
      _sourceId: createElementSchema().optional(),
      validateProfileId: primitives.getIdSchema().optional(),
      _validateProfileId: createElementSchema().optional(),
      value: primitives.getStringSchema().optional(),
      _value: createElementSchema().optional(),
      warningOnly: primitives.getBooleanSchema().optional(),
      _warningOnly: createElementSchema().optional(),
    });

    return baseSchema;
  });
}
