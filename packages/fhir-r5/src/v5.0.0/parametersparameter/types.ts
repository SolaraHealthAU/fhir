import type {
  Extension,
  Element,
  Address,
  Age,
  Annotation,
  Attachment,
  CodeableConcept,
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
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources. */
export interface ParametersParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

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

  resource?: ResourceList;

  part?: ParametersParameter[];
}
