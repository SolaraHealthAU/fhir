import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createElementSchema,
  createAddressSchema,
  createAgeSchema,
  createAnnotationSchema,
  createAttachmentSchema,
  createCodeableConceptSchema,
  createCodingSchema,
  createContactPointSchema,
  createCountSchema,
  createDistanceSchema,
  createDurationSchema,
  createHumanNameSchema,
  createIdentifierSchema,
  createMoneySchema,
  createPeriodSchema,
  createQuantitySchema,
  createRangeSchema,
  createRatioSchema,
  createReferenceSchema,
  createSampledDataSchema,
  createSignatureSchema,
  createTimingSchema,
  createContactDetailSchema,
  createContributorSchema,
  createDataRequirementSchema,
  createExpressionSchema,
  createParameterDefinitionSchema,
  createRelatedArtifactSchema,
  createTriggerDefinitionSchema,
  createUsageContextSchema,
  createDosageSchema,
  createMetaSchema,
} from "../core/schema";

/* Generated from FHIR JSON Schema */

export function createStructureMapSourceSchema() {
  const baseSchema: z.ZodType<types.StructureMapSource> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    context: primitives.createIdSchema().optional(),
    _context: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createIntegerSchema().optional(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createStringSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    defaultValueBase64Binary: z.string().optional(),
    _defaultValueBase64Binary: z.lazy(() => createElementSchema()).optional(),
    defaultValueBoolean: z.boolean().optional(),
    _defaultValueBoolean: z.lazy(() => createElementSchema()).optional(),
    defaultValueCanonical: z.string().optional(),
    _defaultValueCanonical: z.lazy(() => createElementSchema()).optional(),
    defaultValueCode: z.string().optional(),
    _defaultValueCode: z.lazy(() => createElementSchema()).optional(),
    defaultValueDate: z.string().optional(),
    _defaultValueDate: z.lazy(() => createElementSchema()).optional(),
    defaultValueDateTime: z.string().optional(),
    _defaultValueDateTime: z.lazy(() => createElementSchema()).optional(),
    defaultValueDecimal: z.number().optional(),
    _defaultValueDecimal: z.lazy(() => createElementSchema()).optional(),
    defaultValueId: z.string().optional(),
    _defaultValueId: z.lazy(() => createElementSchema()).optional(),
    defaultValueInstant: z.string().optional(),
    _defaultValueInstant: z.lazy(() => createElementSchema()).optional(),
    defaultValueInteger: z.number().optional(),
    _defaultValueInteger: z.lazy(() => createElementSchema()).optional(),
    defaultValueMarkdown: z.string().optional(),
    _defaultValueMarkdown: z.lazy(() => createElementSchema()).optional(),
    defaultValueOid: z.string().optional(),
    _defaultValueOid: z.lazy(() => createElementSchema()).optional(),
    defaultValuePositiveInt: z.number().optional(),
    _defaultValuePositiveInt: z.lazy(() => createElementSchema()).optional(),
    defaultValueString: z.string().optional(),
    _defaultValueString: z.lazy(() => createElementSchema()).optional(),
    defaultValueTime: z.string().optional(),
    _defaultValueTime: z.lazy(() => createElementSchema()).optional(),
    defaultValueUnsignedInt: z.number().optional(),
    _defaultValueUnsignedInt: z.lazy(() => createElementSchema()).optional(),
    defaultValueUri: z.string().optional(),
    _defaultValueUri: z.lazy(() => createElementSchema()).optional(),
    defaultValueUrl: z.string().optional(),
    _defaultValueUrl: z.lazy(() => createElementSchema()).optional(),
    defaultValueUuid: z.string().optional(),
    _defaultValueUuid: z.lazy(() => createElementSchema()).optional(),
    defaultValueAddress: z.lazy(() => createAddressSchema()).optional(),
    defaultValueAge: z.lazy(() => createAgeSchema()).optional(),
    defaultValueAnnotation: z.lazy(() => createAnnotationSchema()).optional(),
    defaultValueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    defaultValueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    defaultValueCoding: z.lazy(() => createCodingSchema()).optional(),
    defaultValueContactPoint: z
      .lazy(() => createContactPointSchema())
      .optional(),
    defaultValueCount: z.lazy(() => createCountSchema()).optional(),
    defaultValueDistance: z.lazy(() => createDistanceSchema()).optional(),
    defaultValueDuration: z.lazy(() => createDurationSchema()).optional(),
    defaultValueHumanName: z.lazy(() => createHumanNameSchema()).optional(),
    defaultValueIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    defaultValueMoney: z.lazy(() => createMoneySchema()).optional(),
    defaultValuePeriod: z.lazy(() => createPeriodSchema()).optional(),
    defaultValueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    defaultValueRange: z.lazy(() => createRangeSchema()).optional(),
    defaultValueRatio: z.lazy(() => createRatioSchema()).optional(),
    defaultValueReference: z.lazy(() => createReferenceSchema()).optional(),
    defaultValueSampledData: z.lazy(() => createSampledDataSchema()).optional(),
    defaultValueSignature: z.lazy(() => createSignatureSchema()).optional(),
    defaultValueTiming: z.lazy(() => createTimingSchema()).optional(),
    defaultValueContactDetail: z
      .lazy(() => createContactDetailSchema())
      .optional(),
    defaultValueContributor: z.lazy(() => createContributorSchema()).optional(),
    defaultValueDataRequirement: z
      .lazy(() => createDataRequirementSchema())
      .optional(),
    defaultValueExpression: z.lazy(() => createExpressionSchema()).optional(),
    defaultValueParameterDefinition: z
      .lazy(() => createParameterDefinitionSchema())
      .optional(),
    defaultValueRelatedArtifact: z
      .lazy(() => createRelatedArtifactSchema())
      .optional(),
    defaultValueTriggerDefinition: z
      .lazy(() => createTriggerDefinitionSchema())
      .optional(),
    defaultValueUsageContext: z
      .lazy(() => createUsageContextSchema())
      .optional(),
    defaultValueDosage: z.lazy(() => createDosageSchema()).optional(),
    defaultValueMeta: z.lazy(() => createMetaSchema()).optional(),
    element: primitives.createStringSchema().optional(),
    _element: z.lazy(() => createElementSchema()).optional(),
    listMode: z
      .enum(["first", "not_first", "last", "not_last", "only_one"])
      .optional(),
    _listMode: z.lazy(() => createElementSchema()).optional(),
    variable: primitives.createIdSchema().optional(),
    _variable: z.lazy(() => createElementSchema()).optional(),
    condition: primitives.createStringSchema().optional(),
    _condition: z.lazy(() => createElementSchema()).optional(),
    check: primitives.createStringSchema().optional(),
    _check: z.lazy(() => createElementSchema()).optional(),
    logMessage: primitives.createStringSchema().optional(),
    _logMessage: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
