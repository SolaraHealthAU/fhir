import { z } from "zod";
import * as types from "./types";
import * as primitives from "../primitives";
import {
  createExtensionSchema,
  createCodeableConceptSchema,
  createElementSchema,
  createAddressSchema,
  createAgeSchema,
  createAnnotationSchema,
  createAttachmentSchema,
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

export function createTaskInputSchema() {
  const baseSchema: z.ZodType<types.TaskInput> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    type: z.lazy(() => createCodeableConceptSchema()),
    valueBase64Binary: z.string().optional(),
    _valueBase64Binary: z.lazy(() => createElementSchema()).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(() => createElementSchema()).optional(),
    valueCanonical: z.string().optional(),
    _valueCanonical: z.lazy(() => createElementSchema()).optional(),
    valueCode: z.string().optional(),
    _valueCode: z.lazy(() => createElementSchema()).optional(),
    valueDate: z.string().optional(),
    _valueDate: z.lazy(() => createElementSchema()).optional(),
    valueDateTime: z.string().optional(),
    _valueDateTime: z.lazy(() => createElementSchema()).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(() => createElementSchema()).optional(),
    valueId: z.string().optional(),
    _valueId: z.lazy(() => createElementSchema()).optional(),
    valueInstant: z.string().optional(),
    _valueInstant: z.lazy(() => createElementSchema()).optional(),
    valueInteger: z.number().optional(),
    _valueInteger: z.lazy(() => createElementSchema()).optional(),
    valueMarkdown: z.string().optional(),
    _valueMarkdown: z.lazy(() => createElementSchema()).optional(),
    valueOid: z.string().optional(),
    _valueOid: z.lazy(() => createElementSchema()).optional(),
    valuePositiveInt: z.number().optional(),
    _valuePositiveInt: z.lazy(() => createElementSchema()).optional(),
    valueString: z.string().optional(),
    _valueString: z.lazy(() => createElementSchema()).optional(),
    valueTime: z.string().optional(),
    _valueTime: z.lazy(() => createElementSchema()).optional(),
    valueUnsignedInt: z.number().optional(),
    _valueUnsignedInt: z.lazy(() => createElementSchema()).optional(),
    valueUri: z.string().optional(),
    _valueUri: z.lazy(() => createElementSchema()).optional(),
    valueUrl: z.string().optional(),
    _valueUrl: z.lazy(() => createElementSchema()).optional(),
    valueUuid: z.string().optional(),
    _valueUuid: z.lazy(() => createElementSchema()).optional(),
    valueAddress: z.lazy(() => createAddressSchema()).optional(),
    valueAge: z.lazy(() => createAgeSchema()).optional(),
    valueAnnotation: z.lazy(() => createAnnotationSchema()).optional(),
    valueAttachment: z.lazy(() => createAttachmentSchema()).optional(),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueCoding: z.lazy(() => createCodingSchema()).optional(),
    valueContactPoint: z.lazy(() => createContactPointSchema()).optional(),
    valueCount: z.lazy(() => createCountSchema()).optional(),
    valueDistance: z.lazy(() => createDistanceSchema()).optional(),
    valueDuration: z.lazy(() => createDurationSchema()).optional(),
    valueHumanName: z.lazy(() => createHumanNameSchema()).optional(),
    valueIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
    valueMoney: z.lazy(() => createMoneySchema()).optional(),
    valuePeriod: z.lazy(() => createPeriodSchema()).optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueRatio: z.lazy(() => createRatioSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
    valueSampledData: z.lazy(() => createSampledDataSchema()).optional(),
    valueSignature: z.lazy(() => createSignatureSchema()).optional(),
    valueTiming: z.lazy(() => createTimingSchema()).optional(),
    valueContactDetail: z.lazy(() => createContactDetailSchema()).optional(),
    valueContributor: z.lazy(() => createContributorSchema()).optional(),
    valueDataRequirement: z
      .lazy(() => createDataRequirementSchema())
      .optional(),
    valueExpression: z.lazy(() => createExpressionSchema()).optional(),
    valueParameterDefinition: z
      .lazy(() => createParameterDefinitionSchema())
      .optional(),
    valueRelatedArtifact: z
      .lazy(() => createRelatedArtifactSchema())
      .optional(),
    valueTriggerDefinition: z
      .lazy(() => createTriggerDefinitionSchema())
      .optional(),
    valueUsageContext: z.lazy(() => createUsageContextSchema()).optional(),
    valueDosage: z.lazy(() => createDosageSchema()).optional(),
    valueMeta: z.lazy(() => createMetaSchema()).optional(),
  });

  return baseSchema;
}
