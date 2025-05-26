import type {
  Extension,
  Element,
  Address,
  Age,
  Annotation,
  Attachment,
  CodeableConcept,
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
  Reference,
  SampledData,
  Signature,
  Timing,
  ContactDetail,
  Contributor,
  DataRequirement,
  Expression,
  ParameterDefinition,
  RelatedArtifact,
  TriggerDefinition,
  UsageContext,
  Dosage,
  Meta,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionExample {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** Describes the purpose of this example amoung the set of examples. */
  label: string;

  _label?: Element;

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

  valueReference?: Reference;

  valueSampledData?: SampledData;

  valueSignature?: Signature;

  valueTiming?: Timing;

  valueContactDetail?: ContactDetail;

  valueContributor?: Contributor;

  valueDataRequirement?: DataRequirement;

  valueExpression?: Expression;

  valueParameterDefinition?: ParameterDefinition;

  valueRelatedArtifact?: RelatedArtifact;

  valueTriggerDefinition?: TriggerDefinition;

  valueUsageContext?: UsageContext;

  valueDosage?: Dosage;

  valueMeta?: Meta;
}
