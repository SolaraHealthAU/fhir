import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptVariable {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  defaultValue?: string;

  _defaultValue?: Element;

  description?: string;

  _description?: Element;

  expression?: string;

  _expression?: Element;

  headerField?: string;

  _headerField?: Element;

  hint?: string;

  _hint?: Element;

  path?: string;

  _path?: Element;

  sourceId?: string;

  _sourceId?: Element;
}
