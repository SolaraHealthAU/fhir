import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import {
  createExtensionSchema,
  createElementSchema,
  createCodingSchema,
  createAddressSchema,
  createAgeSchema,
  createAnnotationSchema,
  createAttachmentSchema,
  createCodeableConceptSchema,
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
import { createElementDefinitionSlicingSchema } from "../elementdefinitionslicing/schema";
import { createElementDefinitionBaseSchema } from "../elementdefinitionbase/schema";
import { createElementDefinitionTypeSchema } from "../elementdefinitiontype/schema";
import { createElementDefinitionExampleSchema } from "../elementdefinitionexample/schema";
import { createElementDefinitionConstraintSchema } from "../elementdefinitionconstraint/schema";
import { createElementDefinitionBindingSchema } from "../elementdefinitionbinding/schema";
import { createElementDefinitionMappingSchema } from "../elementdefinitionmapping/schema";

/* Generated from FHIR JSON Schema */

export function createElementDefinitionSchema() {
  return getCachedSchema("ElementDefinition", () => {
    const baseSchema: z.ZodType<types.ElementDefinition> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      path: primitives.getStringSchema(),
      _path: z.lazy(() => createElementSchema()).optional(),
      representation: z.array(z.any()).optional(),
      _representation: z.array(z.lazy(() => createElementSchema())).optional(),
      sliceName: primitives.getStringSchema().optional(),
      _sliceName: z.lazy(() => createElementSchema()).optional(),
      sliceIsConstraining: primitives.getBooleanSchema().optional(),
      _sliceIsConstraining: z.lazy(() => createElementSchema()).optional(),
      label: primitives.getStringSchema().optional(),
      _label: z.lazy(() => createElementSchema()).optional(),
      code: z.array(createCodingSchema()).optional(),
      slicing: createElementDefinitionSlicingSchema().optional(),
      short: primitives.getStringSchema().optional(),
      _short: z.lazy(() => createElementSchema()).optional(),
      definition: primitives.getMarkdownSchema().optional(),
      _definition: z.lazy(() => createElementSchema()).optional(),
      comment: primitives.getMarkdownSchema().optional(),
      _comment: z.lazy(() => createElementSchema()).optional(),
      requirements: primitives.getMarkdownSchema().optional(),
      _requirements: z.lazy(() => createElementSchema()).optional(),
      alias: z.array(primitives.getStringSchema()).optional(),
      _alias: z.array(z.lazy(() => createElementSchema())).optional(),
      min: primitives.getUnsignedIntSchema().optional(),
      _min: z.lazy(() => createElementSchema()).optional(),
      max: primitives.getStringSchema().optional(),
      _max: z.lazy(() => createElementSchema()).optional(),
      base: createElementDefinitionBaseSchema().optional(),
      contentReference: primitives.getUriSchema().optional(),
      _contentReference: z.lazy(() => createElementSchema()).optional(),
      type: z.array(createElementDefinitionTypeSchema()).optional(),
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
      defaultValueAddress: createAddressSchema().optional(),
      defaultValueAge: createAgeSchema().optional(),
      defaultValueAnnotation: createAnnotationSchema().optional(),
      defaultValueAttachment: createAttachmentSchema().optional(),
      defaultValueCodeableConcept: createCodeableConceptSchema().optional(),
      defaultValueCoding: createCodingSchema().optional(),
      defaultValueContactPoint: createContactPointSchema().optional(),
      defaultValueCount: createCountSchema().optional(),
      defaultValueDistance: createDistanceSchema().optional(),
      defaultValueDuration: createDurationSchema().optional(),
      defaultValueHumanName: createHumanNameSchema().optional(),
      defaultValueIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      defaultValueMoney: createMoneySchema().optional(),
      defaultValuePeriod: createPeriodSchema().optional(),
      defaultValueQuantity: createQuantitySchema().optional(),
      defaultValueRange: createRangeSchema().optional(),
      defaultValueRatio: createRatioSchema().optional(),
      defaultValueReference: createReferenceSchema().optional(),
      defaultValueSampledData: createSampledDataSchema().optional(),
      defaultValueSignature: createSignatureSchema().optional(),
      defaultValueTiming: createTimingSchema().optional(),
      defaultValueContactDetail: createContactDetailSchema().optional(),
      defaultValueContributor: createContributorSchema().optional(),
      defaultValueDataRequirement: createDataRequirementSchema().optional(),
      defaultValueExpression: createExpressionSchema().optional(),
      defaultValueParameterDefinition:
        createParameterDefinitionSchema().optional(),
      defaultValueRelatedArtifact: createRelatedArtifactSchema().optional(),
      defaultValueTriggerDefinition: createTriggerDefinitionSchema().optional(),
      defaultValueUsageContext: createUsageContextSchema().optional(),
      defaultValueDosage: createDosageSchema().optional(),
      defaultValueMeta: createMetaSchema().optional(),
      meaningWhenMissing: primitives.getMarkdownSchema().optional(),
      _meaningWhenMissing: z.lazy(() => createElementSchema()).optional(),
      orderMeaning: primitives.getStringSchema().optional(),
      _orderMeaning: z.lazy(() => createElementSchema()).optional(),
      fixedBase64Binary: z.string().optional(),
      _fixedBase64Binary: z.lazy(() => createElementSchema()).optional(),
      fixedBoolean: z.boolean().optional(),
      _fixedBoolean: z.lazy(() => createElementSchema()).optional(),
      fixedCanonical: z.string().optional(),
      _fixedCanonical: z.lazy(() => createElementSchema()).optional(),
      fixedCode: z.string().optional(),
      _fixedCode: z.lazy(() => createElementSchema()).optional(),
      fixedDate: z.string().optional(),
      _fixedDate: z.lazy(() => createElementSchema()).optional(),
      fixedDateTime: z.string().optional(),
      _fixedDateTime: z.lazy(() => createElementSchema()).optional(),
      fixedDecimal: z.number().optional(),
      _fixedDecimal: z.lazy(() => createElementSchema()).optional(),
      fixedId: z.string().optional(),
      _fixedId: z.lazy(() => createElementSchema()).optional(),
      fixedInstant: z.string().optional(),
      _fixedInstant: z.lazy(() => createElementSchema()).optional(),
      fixedInteger: z.number().optional(),
      _fixedInteger: z.lazy(() => createElementSchema()).optional(),
      fixedMarkdown: z.string().optional(),
      _fixedMarkdown: z.lazy(() => createElementSchema()).optional(),
      fixedOid: z.string().optional(),
      _fixedOid: z.lazy(() => createElementSchema()).optional(),
      fixedPositiveInt: z.number().optional(),
      _fixedPositiveInt: z.lazy(() => createElementSchema()).optional(),
      fixedString: z.string().optional(),
      _fixedString: z.lazy(() => createElementSchema()).optional(),
      fixedTime: z.string().optional(),
      _fixedTime: z.lazy(() => createElementSchema()).optional(),
      fixedUnsignedInt: z.number().optional(),
      _fixedUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      fixedUri: z.string().optional(),
      _fixedUri: z.lazy(() => createElementSchema()).optional(),
      fixedUrl: z.string().optional(),
      _fixedUrl: z.lazy(() => createElementSchema()).optional(),
      fixedUuid: z.string().optional(),
      _fixedUuid: z.lazy(() => createElementSchema()).optional(),
      fixedAddress: createAddressSchema().optional(),
      fixedAge: createAgeSchema().optional(),
      fixedAnnotation: createAnnotationSchema().optional(),
      fixedAttachment: createAttachmentSchema().optional(),
      fixedCodeableConcept: createCodeableConceptSchema().optional(),
      fixedCoding: createCodingSchema().optional(),
      fixedContactPoint: createContactPointSchema().optional(),
      fixedCount: createCountSchema().optional(),
      fixedDistance: createDistanceSchema().optional(),
      fixedDuration: createDurationSchema().optional(),
      fixedHumanName: createHumanNameSchema().optional(),
      fixedIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      fixedMoney: createMoneySchema().optional(),
      fixedPeriod: createPeriodSchema().optional(),
      fixedQuantity: createQuantitySchema().optional(),
      fixedRange: createRangeSchema().optional(),
      fixedRatio: createRatioSchema().optional(),
      fixedReference: createReferenceSchema().optional(),
      fixedSampledData: createSampledDataSchema().optional(),
      fixedSignature: createSignatureSchema().optional(),
      fixedTiming: createTimingSchema().optional(),
      fixedContactDetail: createContactDetailSchema().optional(),
      fixedContributor: createContributorSchema().optional(),
      fixedDataRequirement: createDataRequirementSchema().optional(),
      fixedExpression: createExpressionSchema().optional(),
      fixedParameterDefinition: createParameterDefinitionSchema().optional(),
      fixedRelatedArtifact: createRelatedArtifactSchema().optional(),
      fixedTriggerDefinition: createTriggerDefinitionSchema().optional(),
      fixedUsageContext: createUsageContextSchema().optional(),
      fixedDosage: createDosageSchema().optional(),
      fixedMeta: createMetaSchema().optional(),
      patternBase64Binary: z.string().optional(),
      _patternBase64Binary: z.lazy(() => createElementSchema()).optional(),
      patternBoolean: z.boolean().optional(),
      _patternBoolean: z.lazy(() => createElementSchema()).optional(),
      patternCanonical: z.string().optional(),
      _patternCanonical: z.lazy(() => createElementSchema()).optional(),
      patternCode: z.string().optional(),
      _patternCode: z.lazy(() => createElementSchema()).optional(),
      patternDate: z.string().optional(),
      _patternDate: z.lazy(() => createElementSchema()).optional(),
      patternDateTime: z.string().optional(),
      _patternDateTime: z.lazy(() => createElementSchema()).optional(),
      patternDecimal: z.number().optional(),
      _patternDecimal: z.lazy(() => createElementSchema()).optional(),
      patternId: z.string().optional(),
      _patternId: z.lazy(() => createElementSchema()).optional(),
      patternInstant: z.string().optional(),
      _patternInstant: z.lazy(() => createElementSchema()).optional(),
      patternInteger: z.number().optional(),
      _patternInteger: z.lazy(() => createElementSchema()).optional(),
      patternMarkdown: z.string().optional(),
      _patternMarkdown: z.lazy(() => createElementSchema()).optional(),
      patternOid: z.string().optional(),
      _patternOid: z.lazy(() => createElementSchema()).optional(),
      patternPositiveInt: z.number().optional(),
      _patternPositiveInt: z.lazy(() => createElementSchema()).optional(),
      patternString: z.string().optional(),
      _patternString: z.lazy(() => createElementSchema()).optional(),
      patternTime: z.string().optional(),
      _patternTime: z.lazy(() => createElementSchema()).optional(),
      patternUnsignedInt: z.number().optional(),
      _patternUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      patternUri: z.string().optional(),
      _patternUri: z.lazy(() => createElementSchema()).optional(),
      patternUrl: z.string().optional(),
      _patternUrl: z.lazy(() => createElementSchema()).optional(),
      patternUuid: z.string().optional(),
      _patternUuid: z.lazy(() => createElementSchema()).optional(),
      patternAddress: createAddressSchema().optional(),
      patternAge: createAgeSchema().optional(),
      patternAnnotation: createAnnotationSchema().optional(),
      patternAttachment: createAttachmentSchema().optional(),
      patternCodeableConcept: createCodeableConceptSchema().optional(),
      patternCoding: createCodingSchema().optional(),
      patternContactPoint: createContactPointSchema().optional(),
      patternCount: createCountSchema().optional(),
      patternDistance: createDistanceSchema().optional(),
      patternDuration: createDurationSchema().optional(),
      patternHumanName: createHumanNameSchema().optional(),
      patternIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      patternMoney: createMoneySchema().optional(),
      patternPeriod: createPeriodSchema().optional(),
      patternQuantity: createQuantitySchema().optional(),
      patternRange: createRangeSchema().optional(),
      patternRatio: createRatioSchema().optional(),
      patternReference: createReferenceSchema().optional(),
      patternSampledData: createSampledDataSchema().optional(),
      patternSignature: createSignatureSchema().optional(),
      patternTiming: createTimingSchema().optional(),
      patternContactDetail: createContactDetailSchema().optional(),
      patternContributor: createContributorSchema().optional(),
      patternDataRequirement: createDataRequirementSchema().optional(),
      patternExpression: createExpressionSchema().optional(),
      patternParameterDefinition: createParameterDefinitionSchema().optional(),
      patternRelatedArtifact: createRelatedArtifactSchema().optional(),
      patternTriggerDefinition: createTriggerDefinitionSchema().optional(),
      patternUsageContext: createUsageContextSchema().optional(),
      patternDosage: createDosageSchema().optional(),
      patternMeta: createMetaSchema().optional(),
      example: z.array(createElementDefinitionExampleSchema()).optional(),
      minValueDate: z.string().optional(),
      _minValueDate: z.lazy(() => createElementSchema()).optional(),
      minValueDateTime: z.string().optional(),
      _minValueDateTime: z.lazy(() => createElementSchema()).optional(),
      minValueInstant: z.string().optional(),
      _minValueInstant: z.lazy(() => createElementSchema()).optional(),
      minValueTime: z.string().optional(),
      _minValueTime: z.lazy(() => createElementSchema()).optional(),
      minValueDecimal: z.number().optional(),
      _minValueDecimal: z.lazy(() => createElementSchema()).optional(),
      minValueInteger: z.number().optional(),
      _minValueInteger: z.lazy(() => createElementSchema()).optional(),
      minValuePositiveInt: z.number().optional(),
      _minValuePositiveInt: z.lazy(() => createElementSchema()).optional(),
      minValueUnsignedInt: z.number().optional(),
      _minValueUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      minValueQuantity: createQuantitySchema().optional(),
      maxValueDate: z.string().optional(),
      _maxValueDate: z.lazy(() => createElementSchema()).optional(),
      maxValueDateTime: z.string().optional(),
      _maxValueDateTime: z.lazy(() => createElementSchema()).optional(),
      maxValueInstant: z.string().optional(),
      _maxValueInstant: z.lazy(() => createElementSchema()).optional(),
      maxValueTime: z.string().optional(),
      _maxValueTime: z.lazy(() => createElementSchema()).optional(),
      maxValueDecimal: z.number().optional(),
      _maxValueDecimal: z.lazy(() => createElementSchema()).optional(),
      maxValueInteger: z.number().optional(),
      _maxValueInteger: z.lazy(() => createElementSchema()).optional(),
      maxValuePositiveInt: z.number().optional(),
      _maxValuePositiveInt: z.lazy(() => createElementSchema()).optional(),
      maxValueUnsignedInt: z.number().optional(),
      _maxValueUnsignedInt: z.lazy(() => createElementSchema()).optional(),
      maxValueQuantity: createQuantitySchema().optional(),
      maxLength: primitives.getIntegerSchema().optional(),
      _maxLength: z.lazy(() => createElementSchema()).optional(),
      condition: z.array(primitives.getIdSchema()).optional(),
      _condition: z.array(z.lazy(() => createElementSchema())).optional(),
      constraint: z.array(createElementDefinitionConstraintSchema()).optional(),
      mustSupport: primitives.getBooleanSchema().optional(),
      _mustSupport: z.lazy(() => createElementSchema()).optional(),
      isModifier: primitives.getBooleanSchema().optional(),
      _isModifier: z.lazy(() => createElementSchema()).optional(),
      isModifierReason: primitives.getStringSchema().optional(),
      _isModifierReason: z.lazy(() => createElementSchema()).optional(),
      isSummary: primitives.getBooleanSchema().optional(),
      _isSummary: z.lazy(() => createElementSchema()).optional(),
      binding: createElementDefinitionBindingSchema().optional(),
      mapping: z.array(createElementDefinitionMappingSchema()).optional(),
    });

    return baseSchema;
  });
}
