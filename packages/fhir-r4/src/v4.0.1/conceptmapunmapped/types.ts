import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapUnmapped {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  mode?: "provided" | "fixed" | "other-map";

  _mode?: Element;

  code?: string;

  _code?: Element;

  display?: string;

  _display?: Element;

  url?: string;
}
