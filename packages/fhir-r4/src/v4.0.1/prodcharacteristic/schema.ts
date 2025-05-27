import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createQuantitySchema,
  createElementSchema,
  createAttachmentSchema,
  createCodeableConceptSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createProdCharacteristicSchema() {
  const baseSchema: z.ZodType<types.ProdCharacteristic> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    height: z.lazy(() => createQuantitySchema()).optional(),
    width: z.lazy(() => createQuantitySchema()).optional(),
    depth: z.lazy(() => createQuantitySchema()).optional(),
    weight: z.lazy(() => createQuantitySchema()).optional(),
    nominalVolume: z.lazy(() => createQuantitySchema()).optional(),
    externalDiameter: z.lazy(() => createQuantitySchema()).optional(),
    shape: primitives.createStringSchema().optional(),
    _shape: z.lazy(() => createElementSchema()).optional(),
    color: z.array(primitives.createStringSchema()).optional(),
    _color: z.array(z.lazy(() => createElementSchema())).optional(),
    imprint: z.array(primitives.createStringSchema()).optional(),
    _imprint: z.array(z.lazy(() => createElementSchema())).optional(),
    image: z.array(z.lazy(() => createAttachmentSchema())).optional(),
    scoring: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}
