import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { createTimingRepeatSchema } from "../timingrepeat/schema";
import { createDataRequirementCodeFilterSchema } from "../datarequirementcodefilter/schema";
import { createDataRequirementDateFilterSchema } from "../datarequirementdatefilter/schema";
import { createDataRequirementSortSchema } from "../datarequirementsort/schema";
import { createDosageDoseAndRateSchema } from "../dosagedoseandrate/schema";

/* Generated from FHIR JSON Schema */
// Resources schema header file

export function createElementSchema() {
  const baseSchema: z.ZodType<types.Element> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
  });

  return baseSchema;
}

export function createExtensionSchema() {
  const baseSchema: z.ZodType<types.Extension> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    url: primitives.createUriSchema(),
    _url: z.lazy(() => createElementSchema()).optional(),
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

export function createAnnotationSchema() {
  const baseSchema: z.ZodType<types.Annotation> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    authorReference: z.lazy(() => createReferenceSchema()).optional(),
    authorString: z.string().optional(),
    _authorString: z.lazy(() => createElementSchema()).optional(),
    time: primitives.createDateTimeSchema().optional(),
    _time: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createMarkdownSchema(),
    _text: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createAttachmentSchema() {
  const baseSchema: z.ZodType<types.Attachment> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    contentType: primitives.createCodeSchema().optional(),
    _contentType: z.lazy(() => createElementSchema()).optional(),
    language: primitives.createCodeSchema().optional(),
    _language: z.lazy(() => createElementSchema()).optional(),
    data: primitives.createBase64BinarySchema().optional(),
    _data: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createUrlSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    size: primitives.createUnsignedIntSchema().optional(),
    _size: z.lazy(() => createElementSchema()).optional(),
    hash: primitives.createBase64BinarySchema().optional(),
    _hash: z.lazy(() => createElementSchema()).optional(),
    title: primitives.createStringSchema().optional(),
    _title: z.lazy(() => createElementSchema()).optional(),
    creation: primitives.createDateTimeSchema().optional(),
    _creation: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createIdentifierSchema() {
  const baseSchema: z.ZodType<types.Identifier> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    use: z.enum(["usual", "official", "temp", "secondary", "old"]).optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    type: z.lazy(() => createCodeableConceptSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
    assigner: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}

export function createCodeableConceptSchema() {
  const baseSchema: z.ZodType<types.CodeableConcept> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    coding: z.array(z.lazy(() => createCodingSchema())).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createCodingSchema() {
  const baseSchema: z.ZodType<types.Coding> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    version: primitives.createStringSchema().optional(),
    _version: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    userSelected: primitives.createBooleanSchema().optional(),
    _userSelected: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createQuantitySchema() {
  const baseSchema: z.ZodType<types.Quantity> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createDurationSchema() {
  const baseSchema: z.ZodType<types.Duration> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createDistanceSchema() {
  const baseSchema: z.ZodType<types.Distance> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createCountSchema() {
  const baseSchema: z.ZodType<types.Count> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createMoneySchema() {
  const baseSchema: z.ZodType<types.Money> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    currency: primitives.createCodeSchema().optional(),
    _currency: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createAgeSchema() {
  const baseSchema: z.ZodType<types.Age> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    value: primitives.createDecimalSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
    _comparator: z.lazy(() => createElementSchema()).optional(),
    unit: primitives.createStringSchema().optional(),
    _unit: z.lazy(() => createElementSchema()).optional(),
    system: primitives.createUriSchema().optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    code: primitives.createCodeSchema().optional(),
    _code: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createRangeSchema() {
  const baseSchema: z.ZodType<types.Range> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    low: z.lazy(() => createQuantitySchema()).optional(),
    high: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}

export function createPeriodSchema() {
  const baseSchema: z.ZodType<types.Period> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    start: primitives.createDateTimeSchema().optional(),
    _start: z.lazy(() => createElementSchema()).optional(),
    end: primitives.createDateTimeSchema().optional(),
    _end: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createRatioSchema() {
  const baseSchema: z.ZodType<types.Ratio> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    numerator: z.lazy(() => createQuantitySchema()).optional(),
    denominator: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}

export function createReferenceSchema() {
  const baseSchema: z.ZodType<types.Reference> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    reference: primitives.createStringSchema().optional(),
    _reference: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createUriSchema().optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    identifier: z.lazy(() => createIdentifierSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createSampledDataSchema() {
  const baseSchema: z.ZodType<types.SampledData> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    origin: z.lazy(() => createQuantitySchema()),
    period: primitives.createDecimalSchema(),
    _period: z.lazy(() => createElementSchema()).optional(),
    factor: primitives.createDecimalSchema().optional(),
    _factor: z.lazy(() => createElementSchema()).optional(),
    lowerLimit: primitives.createDecimalSchema().optional(),
    _lowerLimit: z.lazy(() => createElementSchema()).optional(),
    upperLimit: primitives.createDecimalSchema().optional(),
    _upperLimit: z.lazy(() => createElementSchema()).optional(),
    dimensions: primitives.createPositiveIntSchema(),
    _dimensions: z.lazy(() => createElementSchema()).optional(),
    data: primitives.createStringSchema().optional(),
    _data: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createSignatureSchema() {
  const baseSchema: z.ZodType<types.Signature> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: z.array(z.lazy(() => createCodingSchema())),
    when: primitives.createInstantSchema(),
    _when: z.lazy(() => createElementSchema()).optional(),
    who: z.lazy(() => createReferenceSchema()),
    onBehalfOf: z.lazy(() => createReferenceSchema()).optional(),
    targetFormat: primitives.createCodeSchema().optional(),
    _targetFormat: z.lazy(() => createElementSchema()).optional(),
    sigFormat: primitives.createCodeSchema().optional(),
    _sigFormat: z.lazy(() => createElementSchema()).optional(),
    data: primitives.createBase64BinarySchema().optional(),
    _data: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}

export function createHumanNameSchema() {
  const baseSchema: z.ZodType<types.HumanName> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    use: z
      .enum([
        "usual",
        "official",
        "temp",
        "nickname",
        "anonymous",
        "old",
        "maiden",
      ])
      .optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    family: primitives.createStringSchema().optional(),
    _family: z.lazy(() => createElementSchema()).optional(),
    given: z.array(primitives.createStringSchema()).optional(),
    _given: z.array(z.lazy(() => createElementSchema())).optional(),
    prefix: z.array(primitives.createStringSchema()).optional(),
    _prefix: z.array(z.lazy(() => createElementSchema())).optional(),
    suffix: z.array(primitives.createStringSchema()).optional(),
    _suffix: z.array(z.lazy(() => createElementSchema())).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}

export function createAddressSchema() {
  const baseSchema: z.ZodType<types.Address> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    use: z.enum(["home", "work", "temp", "old", "billing"]).optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    type: z.enum(["postal", "physical", "both"]).optional(),
    _type: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    line: z.array(primitives.createStringSchema()).optional(),
    _line: z.array(z.lazy(() => createElementSchema())).optional(),
    city: primitives.createStringSchema().optional(),
    _city: z.lazy(() => createElementSchema()).optional(),
    district: primitives.createStringSchema().optional(),
    _district: z.lazy(() => createElementSchema()).optional(),
    state: primitives.createStringSchema().optional(),
    _state: z.lazy(() => createElementSchema()).optional(),
    postalCode: primitives.createStringSchema().optional(),
    _postalCode: z.lazy(() => createElementSchema()).optional(),
    country: primitives.createStringSchema().optional(),
    _country: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}

export function createContactPointSchema() {
  const baseSchema: z.ZodType<types.ContactPoint> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    system: z
      .enum(["phone", "fax", "email", "pager", "url", "sms", "other"])
      .optional(),
    _system: z.lazy(() => createElementSchema()).optional(),
    value: primitives.createStringSchema().optional(),
    _value: z.lazy(() => createElementSchema()).optional(),
    use: z.enum(["home", "work", "temp", "old", "mobile"]).optional(),
    _use: z.lazy(() => createElementSchema()).optional(),
    rank: primitives.createPositiveIntSchema().optional(),
    _rank: z.lazy(() => createElementSchema()).optional(),
    period: z.lazy(() => createPeriodSchema()).optional(),
  });

  return baseSchema;
}

export function createTimingSchema() {
  const baseSchema: z.ZodType<types.Timing> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    event: z.array(primitives.createDateTimeSchema()).optional(),
    _event: z.array(z.lazy(() => createElementSchema())).optional(),
    repeat: z.lazy(() => createTimingRepeatSchema()).optional(),
    code: z.lazy(() => createCodeableConceptSchema()).optional(),
  });

  return baseSchema;
}

export function createMetaSchema() {
  const baseSchema: z.ZodType<types.Meta> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    versionId: primitives.createIdSchema().optional(),
    _versionId: z.lazy(() => createElementSchema()).optional(),
    lastUpdated: primitives.createInstantSchema().optional(),
    _lastUpdated: z.lazy(() => createElementSchema()).optional(),
    source: primitives.createUriSchema().optional(),
    _source: z.lazy(() => createElementSchema()).optional(),
    profile: z.array(primitives.createCanonicalSchema()).optional(),
    security: z.array(z.lazy(() => createCodingSchema())).optional(),
    tag: z.array(z.lazy(() => createCodingSchema())).optional(),
  });

  return baseSchema;
}

export function createContactDetailSchema() {
  const baseSchema: z.ZodType<types.ContactDetail> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    telecom: z.array(z.lazy(() => createContactPointSchema())).optional(),
  });

  return baseSchema;
}

export function createContributorSchema() {
  const baseSchema: z.ZodType<types.Contributor> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: z.enum(["author", "editor", "reviewer", "endorser"]),
    _type: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema(),
    _name: z.lazy(() => createElementSchema()).optional(),
    contact: z.array(z.lazy(() => createContactDetailSchema())).optional(),
  });

  return baseSchema;
}

export function createDataRequirementSchema() {
  const baseSchema: z.ZodType<types.DataRequirement> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: primitives.createCodeSchema(),
    _type: z.lazy(() => createElementSchema()).optional(),
    profile: z.array(primitives.createCanonicalSchema()).optional(),
    subjectCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    subjectReference: z.lazy(() => createReferenceSchema()).optional(),
    mustSupport: z.array(primitives.createStringSchema()).optional(),
    _mustSupport: z.array(z.lazy(() => createElementSchema())).optional(),
    codeFilter: z
      .array(z.lazy(() => createDataRequirementCodeFilterSchema()))
      .optional(),
    dateFilter: z
      .array(z.lazy(() => createDataRequirementDateFilterSchema()))
      .optional(),
    limit: primitives.createPositiveIntSchema().optional(),
    _limit: z.lazy(() => createElementSchema()).optional(),
    sort: z.array(z.lazy(() => createDataRequirementSortSchema())).optional(),
  });

  return baseSchema;
}

export function createParameterDefinitionSchema() {
  const baseSchema: z.ZodType<types.ParameterDefinition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    name: primitives.createCodeSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    use: primitives.createCodeSchema(),
    _use: z.lazy(() => createElementSchema()).optional(),
    min: primitives.createIntegerSchema().optional(),
    _min: z.lazy(() => createElementSchema()).optional(),
    max: primitives.createStringSchema().optional(),
    _max: z.lazy(() => createElementSchema()).optional(),
    documentation: primitives.createStringSchema().optional(),
    _documentation: z.lazy(() => createElementSchema()).optional(),
    type: primitives.createCodeSchema(),
    _type: z.lazy(() => createElementSchema()).optional(),
    profile: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}

export function createRelatedArtifactSchema() {
  const baseSchema: z.ZodType<types.RelatedArtifact> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: z.enum([
      "documentation",
      "justification",
      "citation",
      "predecessor",
      "successor",
      "derived-from",
      "depends-on",
      "composed-of",
    ]),
    _type: z.lazy(() => createElementSchema()).optional(),
    label: primitives.createStringSchema().optional(),
    _label: z.lazy(() => createElementSchema()).optional(),
    display: primitives.createStringSchema().optional(),
    _display: z.lazy(() => createElementSchema()).optional(),
    citation: primitives.createMarkdownSchema().optional(),
    _citation: z.lazy(() => createElementSchema()).optional(),
    url: primitives.createUrlSchema().optional(),
    _url: z.lazy(() => createElementSchema()).optional(),
    document: z.lazy(() => createAttachmentSchema()).optional(),
    resource: primitives.createCanonicalSchema().optional(),
  });

  return baseSchema;
}

export function createTriggerDefinitionSchema() {
  const baseSchema: z.ZodType<types.TriggerDefinition> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    type: z.enum([
      "named-event",
      "periodic",
      "data-changed",
      "data-added",
      "data-modified",
      "data-removed",
      "data-accessed",
      "data-access-ended",
    ]),
    _type: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createStringSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    timingTiming: z.lazy(() => createTimingSchema()).optional(),
    timingReference: z.lazy(() => createReferenceSchema()).optional(),
    timingDate: z.string().optional(),
    _timingDate: z.lazy(() => createElementSchema()).optional(),
    timingDateTime: z.string().optional(),
    _timingDateTime: z.lazy(() => createElementSchema()).optional(),
    data: z.array(z.lazy(() => createDataRequirementSchema())).optional(),
    condition: z.lazy(() => createExpressionSchema()).optional(),
  });

  return baseSchema;
}

export function createUsageContextSchema() {
  const baseSchema: z.ZodType<types.UsageContext> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    code: z.lazy(() => createCodingSchema()),
    valueCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    valueQuantity: z.lazy(() => createQuantitySchema()).optional(),
    valueRange: z.lazy(() => createRangeSchema()).optional(),
    valueReference: z.lazy(() => createReferenceSchema()).optional(),
  });

  return baseSchema;
}

export function createDosageSchema() {
  const baseSchema: z.ZodType<types.Dosage> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    modifierExtension: z
      .array(z.lazy(() => createExtensionSchema()))
      .optional(),
    sequence: primitives.createIntegerSchema().optional(),
    _sequence: z.lazy(() => createElementSchema()).optional(),
    text: primitives.createStringSchema().optional(),
    _text: z.lazy(() => createElementSchema()).optional(),
    additionalInstruction: z
      .array(z.lazy(() => createCodeableConceptSchema()))
      .optional(),
    patientInstruction: primitives.createStringSchema().optional(),
    _patientInstruction: z.lazy(() => createElementSchema()).optional(),
    timing: z.lazy(() => createTimingSchema()).optional(),
    asNeededBoolean: z.boolean().optional(),
    _asNeededBoolean: z.lazy(() => createElementSchema()).optional(),
    asNeededCodeableConcept: z
      .lazy(() => createCodeableConceptSchema())
      .optional(),
    site: z.lazy(() => createCodeableConceptSchema()).optional(),
    route: z.lazy(() => createCodeableConceptSchema()).optional(),
    method: z.lazy(() => createCodeableConceptSchema()).optional(),
    doseAndRate: z
      .array(z.lazy(() => createDosageDoseAndRateSchema()))
      .optional(),
    maxDosePerPeriod: z.lazy(() => createRatioSchema()).optional(),
    maxDosePerAdministration: z.lazy(() => createQuantitySchema()).optional(),
    maxDosePerLifetime: z.lazy(() => createQuantitySchema()).optional(),
  });

  return baseSchema;
}

export function createExpressionSchema() {
  const baseSchema: z.ZodType<types.Expression> = z.object({
    id: primitives.createStringSchema().optional(),
    extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    description: primitives.createStringSchema().optional(),
    _description: z.lazy(() => createElementSchema()).optional(),
    name: primitives.createIdSchema().optional(),
    _name: z.lazy(() => createElementSchema()).optional(),
    language: z.enum(["text/cql", "text/fhirpath", "application/x-fhir-query"]),
    _language: z.lazy(() => createElementSchema()).optional(),
    expression: primitives.createStringSchema().optional(),
    _expression: z.lazy(() => createElementSchema()).optional(),
    reference: primitives.createUriSchema().optional(),
    _reference: z.lazy(() => createElementSchema()).optional(),
  });

  return baseSchema;
}
