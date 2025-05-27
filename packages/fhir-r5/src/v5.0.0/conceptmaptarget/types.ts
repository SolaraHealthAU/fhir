import type { Extension, Element } from "../core/types";
import type { ConceptMapProperty1 } from "../conceptmapproperty1/types";
import type { ConceptMapDependsOn } from "../conceptmapdependson/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  display?: string;

  _display?: Element;

  valueSet?: string;

  relationship?: string;

  _relationship?: Element;

  comment?: string;

  _comment?: Element;

  property?: ConceptMapProperty1[];

  dependsOn?: ConceptMapDependsOn[];

  product?: ConceptMapDependsOn[];
}
