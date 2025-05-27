import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableReferenceSchema,
} from "../core/schema";
import { createServiceRequestParameterSchema } from "../servicerequestparameter/schema";

/* Generated from FHIR JSON Schema */

export function createServiceRequestOrderDetailSchema() {
  const baseSchema: z.ZodType<types.ServiceRequestOrderDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    parameterFocus: z.lazy(() => createCodeableReferenceSchema()).optional(),
    parameter: z.array(z.lazy(() => createServiceRequestParameterSchema())),
  });

  return baseSchema;
}
