import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinitionQuantitativeDetails {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Customary unit used to report quantitative results of observations conforming to this ObservationDefinition. */
  customaryUnit?: CodeableConcept;
  /** SI unit used to report quantitative results of observations conforming to this ObservationDefinition. */
  unit?: CodeableConcept;
  /** Factor for converting value expressed with SI unit to value expressed with customary unit. */
  conversionFactor?: number;

  _conversionFactor?: Element;
  /** Number of digits after decimal separator when the results of such observations are of type Quantity. */
  decimalPrecision?: number;

  _decimalPrecision?: Element;
}
