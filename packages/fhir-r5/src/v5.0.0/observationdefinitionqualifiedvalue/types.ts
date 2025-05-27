import type { Extension, CodeableConcept, Element, Range } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinitionQualifiedValue {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  context?: CodeableConcept;

  appliesTo?: CodeableConcept[];

  gender?: string;

  _gender?: Element;

  age?: Range;

  gestationalAge?: Range;

  condition?: string;

  _condition?: Element;

  rangeCategory?: string;

  _rangeCategory?: Element;

  range?: Range;

  validCodedValueSet?: string;

  normalCodedValueSet?: string;

  abnormalCodedValueSet?: string;

  criticalCodedValueSet?: string;
}
