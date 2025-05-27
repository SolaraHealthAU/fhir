import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of requirements - a list of features or behaviors of designed systems that are necessary to achieve organizational or regulatory goals. */
export interface RequirementsStatement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  key?: string;

  _key?: Element;

  label?: string;

  _label?: Element;

  conformance?: string[];

  _conformance?: Element[];

  conditionality?: boolean;

  _conditionality?: Element;

  requirement?: string;

  _requirement?: Element;

  derivedFrom?: string;

  _derivedFrom?: Element;

  parent?: string;

  _parent?: Element;

  satisfiedBy?: string[];

  _satisfiedBy?: Element[];

  reference?: string[];

  _reference?: Element[];

  source?: Reference[];
}
