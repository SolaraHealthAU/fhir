import type {
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product. */
export interface RegulatedAuthorizationCase {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  type?: CodeableConcept;

  status?: CodeableConcept;

  datePeriod?: Period;

  dateDateTime?: string;

  _dateDateTime?: Element;

  application?: RegulatedAuthorizationCase[];
}
