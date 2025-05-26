import type {
  Extension,
  CodeableConcept,
  Element,
  Expression,
  DataRequirement,
  UsageContext,
  Period,
  Duration,
  Timing,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface ResearchElementDefinitionCharacteristic {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];

  definitionCodeableConcept?: CodeableConcept;

  definitionCanonical?: string;

  _definitionCanonical?: Element;

  definitionExpression?: Expression;

  definitionDataRequirement?: DataRequirement;
  /** Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings. */
  usageContext?: UsageContext[];
  /** When true, members with this characteristic are excluded from the element. */
  exclude?: boolean;

  _exclude?: Element;
  /** Specifies the UCUM unit for the outcome. */
  unitOfMeasure?: CodeableConcept;
  /** A narrative description of the time period the study covers. */
  studyEffectiveDescription?: string;

  _studyEffectiveDescription?: Element;

  studyEffectiveDateTime?: string;

  _studyEffectiveDateTime?: Element;

  studyEffectivePeriod?: Period;

  studyEffectiveDuration?: Duration;

  studyEffectiveTiming?: Timing;
  /** Indicates duration from the study initiation. */
  studyEffectiveTimeFromStart?: Duration;
  /** Indicates how elements are aggregated within the study effective period. */
  studyEffectiveGroupMeasure?:
    | "mean"
    | "median"
    | "mean-of-mean"
    | "mean-of-median"
    | "median-of-mean"
    | "median-of-median";

  _studyEffectiveGroupMeasure?: Element;

  participantEffectiveDescription?: string;

  _participantEffectiveDescription?: Element;

  participantEffectiveDateTime?: string;

  _participantEffectiveDateTime?: Element;

  participantEffectivePeriod?: Period;

  participantEffectiveDuration?: Duration;

  participantEffectiveTiming?: Timing;

  participantEffectiveTimeFromStart?: Duration;
  /** Indicates how elements are aggregated within the study effective period. */
  participantEffectiveGroupMeasure?:
    | "mean"
    | "median"
    | "mean-of-mean"
    | "mean-of-median"
    | "median-of-mean"
    | "median-of-median";

  _participantEffectiveGroupMeasure?: Element;
}
