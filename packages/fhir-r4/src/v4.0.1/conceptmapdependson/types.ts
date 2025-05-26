import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapDependsOn {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  property?: string;

  _property?: Element;

  system?: string;

  value?: string;

  _value?: Element;

  display?: string;

  _display?: Element;
}
