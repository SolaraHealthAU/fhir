import type { Extension, Element } from "../core/types";
import type { TerminologyCapabilitiesFilter } from "../terminologycapabilitiesfilter/types";

/** Generated from FHIR JSON Schema */

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface TerminologyCapabilitiesVersion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  isDefault?: boolean;

  _isDefault?: Element;

  compositional?: boolean;

  _compositional?: Element;

  language?: string[];

  _language?: Element[];

  filter?: TerminologyCapabilitiesFilter[];

  property?: string[];

  _property?: Element[];
}
