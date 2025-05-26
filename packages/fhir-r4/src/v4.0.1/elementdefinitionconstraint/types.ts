import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionConstraint {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality. */
  key: string;

  _key?: Element;
  /** Description of why this constraint is necessary or appropriate. */
  requirements?: string;

  _requirements?: Element;
  /** Identifies the impact constraint violation has on the conformance of the instance. */
  severity: "error" | "warning";

  _severity?: Element;
  /** Text that can be used to describe the constraint in messages identifying that the constraint has been violated. */
  human: string;

  _human?: Element;
  /** A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met. */
  expression?: string;

  _expression?: Element;
  /** An XPath expression of constraint that can be executed to see if this constraint is met. */
  xpath?: string;

  _xpath?: Element;
  /** A reference to the original source of the constraint, for traceability purposes. */
  source?: string;
}
