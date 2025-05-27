import type {
  Extension,
  CodeableConcept,
  Element,
  Address,
  Age,
  Annotation,
  Attachment,
  CodeableReference,
  Coding,
  ContactPoint,
  Count,
  Distance,
  Duration,
  HumanName,
  Identifier,
  Money,
  Period,
  Quantity,
  Range,
  Ratio,
  RatioRange,
  Reference,
  SampledData,
  Signature,
  Timing,
  ContactDetail,
  DataRequirement,
  Expression,
  ParameterDefinition,
  RelatedArtifact,
  TriggerDefinition,
  UsageContext,
  Availability,
  ExtendedContactDetail,
  Dosage,
  Meta,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Record of transport of item. */
export interface TransportOutput {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueCanonical?: string;

  _valueCanonical?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueId?: string;

  _valueId?: Element;

  valueInstant?: string;

  _valueInstant?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueInteger64?: string;

  _valueInteger64?: Element;

  valueMarkdown?: string;

  _valueMarkdown?: Element;

  valueOid?: string;

  _valueOid?: Element;

  valuePositiveInt?: number;

  _valuePositiveInt?: Element;

  valueString?: string;

  _valueString?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueUnsignedInt?: number;

  _valueUnsignedInt?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueUrl?: string;

  _valueUrl?: Element;

  valueUuid?: string;

  _valueUuid?: Element;

  valueAddress?: Address;

  valueAge?: Age;

  valueAnnotation?: Annotation;

  valueAttachment?: Attachment;

  valueCodeableConcept?: CodeableConcept;

  valueCodeableReference?: CodeableReference;

  valueCoding?: Coding;

  valueContactPoint?: ContactPoint;

  valueCount?: Count;

  valueDistance?: Distance;

  valueDuration?: Duration;

  valueHumanName?: HumanName;

  valueIdentifier?: Identifier;

  valueMoney?: Money;

  valuePeriod?: Period;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueRatioRange?: RatioRange;

  valueReference?: Reference;

  valueSampledData?: SampledData;

  valueSignature?: Signature;

  valueTiming?: Timing;

  valueContactDetail?: ContactDetail;

  valueDataRequirement?: DataRequirement;

  valueExpression?: Expression;

  valueParameterDefinition?: ParameterDefinition;

  valueRelatedArtifact?: RelatedArtifact;

  valueTriggerDefinition?: TriggerDefinition;

  valueUsageContext?: UsageContext;

  valueAvailability?: Availability;

  valueExtendedContactDetail?: ExtendedContactDetail;

  valueDosage?: Dosage;

  valueMeta?: Meta;
}
