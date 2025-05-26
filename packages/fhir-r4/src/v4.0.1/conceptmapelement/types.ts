import type { Extension, Element } from "../core/types";
import type { ConceptMapTarget } from "../conceptmaptarget/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapElement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  display?: string;

  _display?: Element;

  target?: ConceptMapTarget[];
}
