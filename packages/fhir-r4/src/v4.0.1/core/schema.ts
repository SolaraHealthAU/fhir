import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema } from "../schema-cache";
import { createTimingRepeatSchema } from "../timingrepeat/schema";
import { createDataRequirementCodeFilterSchema } from "../datarequirementcodefilter/schema";
import { createDataRequirementDateFilterSchema } from "../datarequirementdatefilter/schema";
import { createDataRequirementSortSchema } from "../datarequirementsort/schema";
import { createDosageDoseAndRateSchema } from "../dosagedoseandrate/schema";

/* Generated from FHIR JSON Schema */
// Resources schema header file

export function createElementSchema() {
  return getCachedSchema("Element", () => {
    const baseSchema: z.ZodType<types.Element> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
    });

    return baseSchema;
  });
}

export function createExtensionSchema() {
  return getCachedSchema("Extension", () => {
    const baseSchema: z.ZodType<types.Extension> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      url: primitives.getUriSchema(),
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
      valueAddress: createAddressSchema().optional(),
      valueAge: createAgeSchema().optional(),
      valueAnnotation: createAnnotationSchema().optional(),
      valueAttachment: createAttachmentSchema().optional(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueCoding: createCodingSchema().optional(),
      valueContactPoint: createContactPointSchema().optional(),
      valueCount: createCountSchema().optional(),
      valueDistance: createDistanceSchema().optional(),
      valueDuration: createDurationSchema().optional(),
      valueHumanName: createHumanNameSchema().optional(),
      valueIdentifier: z.lazy(() => createIdentifierSchema()).optional(),
      valueMoney: createMoneySchema().optional(),
      valuePeriod: createPeriodSchema().optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueRange: createRangeSchema().optional(),
      valueRatio: createRatioSchema().optional(),
      valueReference: createReferenceSchema().optional(),
      valueSampledData: createSampledDataSchema().optional(),
      valueSignature: createSignatureSchema().optional(),
      valueTiming: createTimingSchema().optional(),
      valueContactDetail: createContactDetailSchema().optional(),
      valueContributor: createContributorSchema().optional(),
      valueDataRequirement: createDataRequirementSchema().optional(),
      valueExpression: createExpressionSchema().optional(),
      valueParameterDefinition: createParameterDefinitionSchema().optional(),
      valueRelatedArtifact: createRelatedArtifactSchema().optional(),
      valueTriggerDefinition: createTriggerDefinitionSchema().optional(),
      valueUsageContext: createUsageContextSchema().optional(),
      valueDosage: createDosageSchema().optional(),
      valueMeta: createMetaSchema().optional(),
    });

    return baseSchema;
  });
}

export function createAnnotationSchema() {
  return getCachedSchema("Annotation", () => {
    const baseSchema: z.ZodType<types.Annotation> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      authorReference: createReferenceSchema().optional(),
      authorString: z.string().optional(),
      _authorString: z.lazy(() => createElementSchema()).optional(),
      time: primitives.getDateTimeSchema().optional(),
      _time: z.lazy(() => createElementSchema()).optional(),
      text: primitives.getMarkdownSchema(),
      _text: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createAttachmentSchema() {
  return getCachedSchema("Attachment", () => {
    const baseSchema: z.ZodType<types.Attachment> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      contentType: primitives.getCodeSchema().optional(),
      _contentType: z.lazy(() => createElementSchema()).optional(),
      language: primitives.getCodeSchema().optional(),
      _language: z.lazy(() => createElementSchema()).optional(),
      data: primitives.getBase64BinarySchema().optional(),
      _data: z.lazy(() => createElementSchema()).optional(),
      url: primitives.getUrlSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      size: primitives.getUnsignedIntSchema().optional(),
      _size: z.lazy(() => createElementSchema()).optional(),
      hash: primitives.getBase64BinarySchema().optional(),
      _hash: z.lazy(() => createElementSchema()).optional(),
      title: primitives.getStringSchema().optional(),
      _title: z.lazy(() => createElementSchema()).optional(),
      creation: primitives.getDateTimeSchema().optional(),
      _creation: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createIdentifierSchema() {
  return getCachedSchema("Identifier", () => {
    const baseSchema: z.ZodType<types.Identifier> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      use: z.enum(["usual", "official", "temp", "secondary", "old"]).optional(),
      _use: z.lazy(() => createElementSchema()).optional(),
      type: createCodeableConceptSchema().optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      value: primitives.getStringSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
      assigner: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}

export function createCodeableConceptSchema() {
  return getCachedSchema("CodeableConcept", () => {
    const baseSchema: z.ZodType<types.CodeableConcept> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      coding: z.array(createCodingSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createCodingSchema() {
  return getCachedSchema("Coding", () => {
    const baseSchema: z.ZodType<types.Coding> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      version: primitives.getStringSchema().optional(),
      _version: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
      userSelected: primitives.getBooleanSchema().optional(),
      _userSelected: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createQuantitySchema() {
  return getCachedSchema("Quantity", () => {
    const baseSchema: z.ZodType<types.Quantity> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
      _comparator: z.lazy(() => createElementSchema()).optional(),
      unit: primitives.getStringSchema().optional(),
      _unit: z.lazy(() => createElementSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createDurationSchema() {
  return getCachedSchema("Duration", () => {
    const baseSchema: z.ZodType<types.Duration> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
      _comparator: z.lazy(() => createElementSchema()).optional(),
      unit: primitives.getStringSchema().optional(),
      _unit: z.lazy(() => createElementSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createDistanceSchema() {
  return getCachedSchema("Distance", () => {
    const baseSchema: z.ZodType<types.Distance> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
      _comparator: z.lazy(() => createElementSchema()).optional(),
      unit: primitives.getStringSchema().optional(),
      _unit: z.lazy(() => createElementSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createCountSchema() {
  return getCachedSchema("Count", () => {
    const baseSchema: z.ZodType<types.Count> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
      _comparator: z.lazy(() => createElementSchema()).optional(),
      unit: primitives.getStringSchema().optional(),
      _unit: z.lazy(() => createElementSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createMoneySchema() {
  return getCachedSchema("Money", () => {
    const baseSchema: z.ZodType<types.Money> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      currency: primitives.getCodeSchema().optional(),
      _currency: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createAgeSchema() {
  return getCachedSchema("Age", () => {
    const baseSchema: z.ZodType<types.Age> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      value: primitives.getDecimalSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      comparator: z.enum(["<", "<=", ">=", ">"]).optional(),
      _comparator: z.lazy(() => createElementSchema()).optional(),
      unit: primitives.getStringSchema().optional(),
      _unit: z.lazy(() => createElementSchema()).optional(),
      system: primitives.getUriSchema().optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      code: primitives.getCodeSchema().optional(),
      _code: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createRangeSchema() {
  return getCachedSchema("Range", () => {
    const baseSchema: z.ZodType<types.Range> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      low: createQuantitySchema().optional(),
      high: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}

export function createPeriodSchema() {
  return getCachedSchema("Period", () => {
    const baseSchema: z.ZodType<types.Period> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      start: primitives.getDateTimeSchema().optional(),
      _start: z.lazy(() => createElementSchema()).optional(),
      end: primitives.getDateTimeSchema().optional(),
      _end: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createRatioSchema() {
  return getCachedSchema("Ratio", () => {
    const baseSchema: z.ZodType<types.Ratio> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      numerator: createQuantitySchema().optional(),
      denominator: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}

export function createReferenceSchema() {
  return getCachedSchema("Reference", () => {
    const baseSchema: z.ZodType<types.Reference> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      reference: primitives.getStringSchema().optional(),
      _reference: z.lazy(() => createElementSchema()).optional(),
      type: primitives.getUriSchema().optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      identifier: z.lazy(() => createIdentifierSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createSampledDataSchema() {
  return getCachedSchema("SampledData", () => {
    const baseSchema: z.ZodType<types.SampledData> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      origin: createQuantitySchema(),
      period: primitives.getDecimalSchema(),
      _period: z.lazy(() => createElementSchema()).optional(),
      factor: primitives.getDecimalSchema().optional(),
      _factor: z.lazy(() => createElementSchema()).optional(),
      lowerLimit: primitives.getDecimalSchema().optional(),
      _lowerLimit: z.lazy(() => createElementSchema()).optional(),
      upperLimit: primitives.getDecimalSchema().optional(),
      _upperLimit: z.lazy(() => createElementSchema()).optional(),
      dimensions: primitives.getPositiveIntSchema(),
      _dimensions: z.lazy(() => createElementSchema()).optional(),
      data: primitives.getStringSchema().optional(),
      _data: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createSignatureSchema() {
  return getCachedSchema("Signature", () => {
    const baseSchema: z.ZodType<types.Signature> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      type: z.array(createCodingSchema()),
      when: primitives.getInstantSchema(),
      _when: z.lazy(() => createElementSchema()).optional(),
      who: createReferenceSchema(),
      onBehalfOf: createReferenceSchema().optional(),
      targetFormat: primitives.getCodeSchema().optional(),
      _targetFormat: z.lazy(() => createElementSchema()).optional(),
      sigFormat: primitives.getCodeSchema().optional(),
      _sigFormat: z.lazy(() => createElementSchema()).optional(),
      data: primitives.getBase64BinarySchema().optional(),
      _data: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createHumanNameSchema() {
  return getCachedSchema("HumanName", () => {
    const baseSchema: z.ZodType<types.HumanName> = z.strictObject({
      id: primitives.getStringSchema().optional(),
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
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
      family: primitives.getStringSchema().optional(),
      _family: z.lazy(() => createElementSchema()).optional(),
      given: z.array(primitives.getStringSchema()).optional(),
      _given: z.array(z.lazy(() => createElementSchema())).optional(),
      prefix: z.array(primitives.getStringSchema()).optional(),
      _prefix: z.array(z.lazy(() => createElementSchema())).optional(),
      suffix: z.array(primitives.getStringSchema()).optional(),
      _suffix: z.array(z.lazy(() => createElementSchema())).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}

export function createAddressSchema() {
  return getCachedSchema("Address", () => {
    const baseSchema: z.ZodType<types.Address> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      use: z.enum(["home", "work", "temp", "old", "billing"]).optional(),
      _use: z.lazy(() => createElementSchema()).optional(),
      type: z.enum(["postal", "physical", "both"]).optional(),
      _type: z.lazy(() => createElementSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
      line: z.array(primitives.getStringSchema()).optional(),
      _line: z.array(z.lazy(() => createElementSchema())).optional(),
      city: primitives.getStringSchema().optional(),
      _city: z.lazy(() => createElementSchema()).optional(),
      district: primitives.getStringSchema().optional(),
      _district: z.lazy(() => createElementSchema()).optional(),
      state: primitives.getStringSchema().optional(),
      _state: z.lazy(() => createElementSchema()).optional(),
      postalCode: primitives.getStringSchema().optional(),
      _postalCode: z.lazy(() => createElementSchema()).optional(),
      country: primitives.getStringSchema().optional(),
      _country: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}

export function createContactPointSchema() {
  return getCachedSchema("ContactPoint", () => {
    const baseSchema: z.ZodType<types.ContactPoint> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      system: z
        .enum(["phone", "fax", "email", "pager", "url", "sms", "other"])
        .optional(),
      _system: z.lazy(() => createElementSchema()).optional(),
      value: primitives.getStringSchema().optional(),
      _value: z.lazy(() => createElementSchema()).optional(),
      use: z.enum(["home", "work", "temp", "old", "mobile"]).optional(),
      _use: z.lazy(() => createElementSchema()).optional(),
      rank: primitives.getPositiveIntSchema().optional(),
      _rank: z.lazy(() => createElementSchema()).optional(),
      period: createPeriodSchema().optional(),
    });

    return baseSchema;
  });
}

export function createTimingSchema() {
  return getCachedSchema("Timing", () => {
    const baseSchema: z.ZodType<types.Timing> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      event: z.array(primitives.getDateTimeSchema()).optional(),
      _event: z.array(z.lazy(() => createElementSchema())).optional(),
      repeat: createTimingRepeatSchema().optional(),
      code: createCodeableConceptSchema().optional(),
    });

    return baseSchema;
  });
}

export function createMetaSchema() {
  return getCachedSchema("Meta", () => {
    const baseSchema: z.ZodType<types.Meta> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      versionId: primitives.getIdSchema().optional(),
      _versionId: z.lazy(() => createElementSchema()).optional(),
      lastUpdated: primitives.getInstantSchema().optional(),
      _lastUpdated: z.lazy(() => createElementSchema()).optional(),
      source: primitives.getUriSchema().optional(),
      _source: z.lazy(() => createElementSchema()).optional(),
      profile: z.array(primitives.getCanonicalSchema()).optional(),
      security: z.array(createCodingSchema()).optional(),
      tag: z.array(createCodingSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createContactDetailSchema() {
  return getCachedSchema("ContactDetail", () => {
    const baseSchema: z.ZodType<types.ContactDetail> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      telecom: z.array(createContactPointSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createContributorSchema() {
  return getCachedSchema("Contributor", () => {
    const baseSchema: z.ZodType<types.Contributor> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      type: z.enum(["author", "editor", "reviewer", "endorser"]),
      _type: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getStringSchema(),
      _name: z.lazy(() => createElementSchema()).optional(),
      contact: z.array(createContactDetailSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createDataRequirementSchema() {
  return getCachedSchema("DataRequirement", () => {
    const baseSchema: z.ZodType<types.DataRequirement> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      type: primitives.getCodeSchema(),
      _type: z.lazy(() => createElementSchema()).optional(),
      profile: z.array(primitives.getCanonicalSchema()).optional(),
      subjectCodeableConcept: createCodeableConceptSchema().optional(),
      subjectReference: createReferenceSchema().optional(),
      mustSupport: z.array(primitives.getStringSchema()).optional(),
      _mustSupport: z.array(z.lazy(() => createElementSchema())).optional(),
      codeFilter: z.array(createDataRequirementCodeFilterSchema()).optional(),
      dateFilter: z.array(createDataRequirementDateFilterSchema()).optional(),
      limit: primitives.getPositiveIntSchema().optional(),
      _limit: z.lazy(() => createElementSchema()).optional(),
      sort: z.array(createDataRequirementSortSchema()).optional(),
    });

    return baseSchema;
  });
}

export function createParameterDefinitionSchema() {
  return getCachedSchema("ParameterDefinition", () => {
    const baseSchema: z.ZodType<types.ParameterDefinition> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      name: primitives.getCodeSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      use: primitives.getCodeSchema(),
      _use: z.lazy(() => createElementSchema()).optional(),
      min: primitives.getIntegerSchema().optional(),
      _min: z.lazy(() => createElementSchema()).optional(),
      max: primitives.getStringSchema().optional(),
      _max: z.lazy(() => createElementSchema()).optional(),
      documentation: primitives.getStringSchema().optional(),
      _documentation: z.lazy(() => createElementSchema()).optional(),
      type: primitives.getCodeSchema(),
      _type: z.lazy(() => createElementSchema()).optional(),
      profile: primitives.getCanonicalSchema().optional(),
    });

    return baseSchema;
  });
}

export function createRelatedArtifactSchema() {
  return getCachedSchema("RelatedArtifact", () => {
    const baseSchema: z.ZodType<types.RelatedArtifact> = z.strictObject({
      id: primitives.getStringSchema().optional(),
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
      label: primitives.getStringSchema().optional(),
      _label: z.lazy(() => createElementSchema()).optional(),
      display: primitives.getStringSchema().optional(),
      _display: z.lazy(() => createElementSchema()).optional(),
      citation: primitives.getMarkdownSchema().optional(),
      _citation: z.lazy(() => createElementSchema()).optional(),
      url: primitives.getUrlSchema().optional(),
      _url: z.lazy(() => createElementSchema()).optional(),
      document: createAttachmentSchema().optional(),
      resource: primitives.getCanonicalSchema().optional(),
    });

    return baseSchema;
  });
}

export function createTriggerDefinitionSchema() {
  return getCachedSchema("TriggerDefinition", () => {
    const baseSchema: z.ZodType<types.TriggerDefinition> = z.strictObject({
      id: primitives.getStringSchema().optional(),
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
      name: primitives.getStringSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      timingTiming: createTimingSchema().optional(),
      timingReference: createReferenceSchema().optional(),
      timingDate: z.string().optional(),
      _timingDate: z.lazy(() => createElementSchema()).optional(),
      timingDateTime: z.string().optional(),
      _timingDateTime: z.lazy(() => createElementSchema()).optional(),
      data: z.array(createDataRequirementSchema()).optional(),
      condition: createExpressionSchema().optional(),
    });

    return baseSchema;
  });
}

export function createUsageContextSchema() {
  return getCachedSchema("UsageContext", () => {
    const baseSchema: z.ZodType<types.UsageContext> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      code: createCodingSchema(),
      valueCodeableConcept: createCodeableConceptSchema().optional(),
      valueQuantity: createQuantitySchema().optional(),
      valueRange: createRangeSchema().optional(),
      valueReference: createReferenceSchema().optional(),
    });

    return baseSchema;
  });
}

export function createDosageSchema() {
  return getCachedSchema("Dosage", () => {
    const baseSchema: z.ZodType<types.Dosage> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      modifierExtension: z
        .array(z.lazy(() => createExtensionSchema()))
        .optional(),
      sequence: primitives.getIntegerSchema().optional(),
      _sequence: z.lazy(() => createElementSchema()).optional(),
      text: primitives.getStringSchema().optional(),
      _text: z.lazy(() => createElementSchema()).optional(),
      additionalInstruction: z.array(createCodeableConceptSchema()).optional(),
      patientInstruction: primitives.getStringSchema().optional(),
      _patientInstruction: z.lazy(() => createElementSchema()).optional(),
      timing: createTimingSchema().optional(),
      asNeededBoolean: z.boolean().optional(),
      _asNeededBoolean: z.lazy(() => createElementSchema()).optional(),
      asNeededCodeableConcept: createCodeableConceptSchema().optional(),
      site: createCodeableConceptSchema().optional(),
      route: createCodeableConceptSchema().optional(),
      method: createCodeableConceptSchema().optional(),
      doseAndRate: z.array(createDosageDoseAndRateSchema()).optional(),
      maxDosePerPeriod: createRatioSchema().optional(),
      maxDosePerAdministration: createQuantitySchema().optional(),
      maxDosePerLifetime: createQuantitySchema().optional(),
    });

    return baseSchema;
  });
}

export function createExpressionSchema() {
  return getCachedSchema("Expression", () => {
    const baseSchema: z.ZodType<types.Expression> = z.strictObject({
      id: primitives.getStringSchema().optional(),
      extension: z.array(z.lazy(() => createExtensionSchema())).optional(),
      description: primitives.getStringSchema().optional(),
      _description: z.lazy(() => createElementSchema()).optional(),
      name: primitives.getIdSchema().optional(),
      _name: z.lazy(() => createElementSchema()).optional(),
      language: z.enum([
        "text/cql",
        "text/fhirpath",
        "application/x-fhir-query",
      ]),
      _language: z.lazy(() => createElementSchema()).optional(),
      expression: primitives.getStringSchema().optional(),
      _expression: z.lazy(() => createElementSchema()).optional(),
      reference: primitives.getUriSchema().optional(),
      _reference: z.lazy(() => createElementSchema()).optional(),
    });

    return baseSchema;
  });
}
