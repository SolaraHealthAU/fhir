import type { Extension, Element, Range, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinitionQualifiedInterval {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition. */
  category?: "reference" | "critical" | "absolute";

  _category?: Element;
  /** The low and high values determining the interval. There may be only one of the two. */
  range?: Range;
  /** Codes to indicate the health context the range applies to. For example, the normal or therapeutic range. */
  context?: CodeableConcept;
  /** Codes to indicate the target population this reference range applies to. */
  appliesTo?: CodeableConcept[];
  /** Sex of the population the range applies to. */
  gender?: "male" | "female" | "other" | "unknown";

  _gender?: Element;
  /** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so. */
  age?: Range;
  /** The gestational age to which this reference range is applicable, in the context of pregnancy. */
  gestationalAge?: Range;
  /** Text based condition for which the reference range is valid. */
  condition?: string;

  _condition?: Element;
}
