import type { Extension, Element } from "../core/types";
import type { TerminologyCapabilitiesParameter } from "../terminologycapabilitiesparameter/types";

/** Generated from FHIR JSON Schema */

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface TerminologyCapabilitiesExpansion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  hierarchical?: boolean;

  _hierarchical?: Element;

  paging?: boolean;

  _paging?: Element;

  incomplete?: boolean;

  _incomplete?: Element;

  parameter?: TerminologyCapabilitiesParameter[];

  textFilter?: string;

  _textFilter?: Element;
}
