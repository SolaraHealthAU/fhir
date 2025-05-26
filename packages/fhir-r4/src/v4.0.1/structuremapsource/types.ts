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

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapSource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  context?: string;

  _context?: Element;

  min?: number;

  _min?: Element;

  max?: string;

  _max?: Element;

  type?: string;

  _type?: Element;

  defaultValueBase64Binary?: string;

  _defaultValueBase64Binary?: Element;

  defaultValueBoolean?: boolean;

  _defaultValueBoolean?: Element;

  defaultValueCanonical?: string;

  _defaultValueCanonical?: Element;

  defaultValueCode?: string;

  _defaultValueCode?: Element;

  defaultValueDate?: string;

  _defaultValueDate?: Element;

  defaultValueDateTime?: string;

  _defaultValueDateTime?: Element;

  defaultValueDecimal?: number;

  _defaultValueDecimal?: Element;

  defaultValueId?: string;

  _defaultValueId?: Element;

  defaultValueInstant?: string;

  _defaultValueInstant?: Element;

  defaultValueInteger?: number;

  _defaultValueInteger?: Element;

  defaultValueMarkdown?: string;

  _defaultValueMarkdown?: Element;

  defaultValueOid?: string;

  _defaultValueOid?: Element;

  defaultValuePositiveInt?: number;

  _defaultValuePositiveInt?: Element;

  defaultValueString?: string;

  _defaultValueString?: Element;

  defaultValueTime?: string;

  _defaultValueTime?: Element;

  defaultValueUnsignedInt?: number;

  _defaultValueUnsignedInt?: Element;

  defaultValueUri?: string;

  _defaultValueUri?: Element;

  defaultValueUrl?: string;

  _defaultValueUrl?: Element;

  defaultValueUuid?: string;

  _defaultValueUuid?: Element;

  defaultValueAddress?: Address;

  defaultValueAge?: Age;

  defaultValueAnnotation?: Annotation;

  defaultValueAttachment?: Attachment;

  defaultValueCodeableConcept?: CodeableConcept;

  defaultValueCoding?: Coding;

  defaultValueContactPoint?: ContactPoint;

  defaultValueCount?: Count;

  defaultValueDistance?: Distance;

  defaultValueDuration?: Duration;

  defaultValueHumanName?: HumanName;

  defaultValueIdentifier?: Identifier;

  defaultValueMoney?: Money;

  defaultValuePeriod?: Period;

  defaultValueQuantity?: Quantity;

  defaultValueRange?: Range;

  defaultValueRatio?: Ratio;

  defaultValueReference?: Reference;

  defaultValueSampledData?: SampledData;

  defaultValueSignature?: Signature;

  defaultValueTiming?: Timing;

  defaultValueContactDetail?: ContactDetail;

  defaultValueContributor?: Contributor;

  defaultValueDataRequirement?: DataRequirement;

  defaultValueExpression?: Expression;

  defaultValueParameterDefinition?: ParameterDefinition;

  defaultValueRelatedArtifact?: RelatedArtifact;

  defaultValueTriggerDefinition?: TriggerDefinition;

  defaultValueUsageContext?: UsageContext;

  defaultValueDosage?: Dosage;

  defaultValueMeta?: Meta;

  element?: string;

  _element?: Element;

  listMode?: "first" | "not_first" | "last" | "not_last" | "only_one";

  _listMode?: Element;

  variable?: string;

  _variable?: Element;

  condition?: string;

  _condition?: Element;

  check?: string;

  _check?: Element;

  logMessage?: string;

  _logMessage?: Element;
}
