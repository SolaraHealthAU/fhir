import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapAdditionalAttribute {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  uri?: string;

  _uri?: Element;

  description?: string;

  _description?: Element;

  type?: string;

  _type?: Element;
}
