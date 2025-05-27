import type { Extension, Element, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A collection of error, warning, or information messages that result from a system action. */
export interface OperationOutcomeIssue {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  severity?: string;

  _severity?: Element;

  code?: string;

  _code?: Element;

  details?: CodeableConcept;

  diagnostics?: string;

  _diagnostics?: Element;

  location?: string[];

  _location?: Element[];

  expression?: string[];

  _expression?: Element[];
}
