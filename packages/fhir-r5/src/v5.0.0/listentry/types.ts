import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organization list, etc. */
export interface ListEntry {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  flag?: CodeableConcept;

  deleted?: boolean;

  _deleted?: Element;

  date?: string;

  _date?: Element;

  item: Reference;
}
