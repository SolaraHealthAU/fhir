import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
  Expression,
  DataRequirement,
  TriggerDefinition,
  UsageContext,
  Period,
  Duration,
  Timing,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface EvidenceVariableCharacteristic {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user. */
  description?: string;

  _description?: Element;

  definitionReference?: Reference;

  definitionCanonical?: string;

  _definitionCanonical?: Element;

  definitionCodeableConcept?: CodeableConcept;

  definitionExpression?: Expression;

  definitionDataRequirement?: DataRequirement;

  definitionTriggerDefinition?: TriggerDefinition;
  /** Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings. */
  usageContext?: UsageContext[];
  /** When true, members with this characteristic are excluded from the element. */
  exclude?: boolean;

  _exclude?: Element;

  participantEffectiveDateTime?: string;

  _participantEffectiveDateTime?: Element;

  participantEffectivePeriod?: Period;

  participantEffectiveDuration?: Duration;

  participantEffectiveTiming?: Timing;
  /** Indicates duration from the participant's study entry. */
  timeFromStart?: Duration;
  /** Indicates how elements are aggregated within the study effective period. */
  groupMeasure?:
    | "mean"
    | "median"
    | "mean-of-mean"
    | "mean-of-median"
    | "median-of-mean"
    | "median-of-median";

  _groupMeasure?: Element;
}
