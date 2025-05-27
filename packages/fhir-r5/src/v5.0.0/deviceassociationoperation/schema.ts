import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createPeriodSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createDeviceAssociationOperationSchema() {
  const baseSchema: z.ZodType<types.DeviceAssociationOperation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    status: z.lazy(() => createCodeableConceptSchema()),
    operator: z.array(z.lazy(() => createReferenceSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}
